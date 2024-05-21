import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRoute } from "./routes/user.route.js";
import { connectDB } from "./database/connection.js";
import { googleAuthRoute } from "./routes/google-auth.route.js";
import passport from "passport";
import session from "express-session";
import GoogleStrategy from "passport-google-oauth2";
import { User } from "./models/user.model.js";
const { Strategy } = GoogleStrategy;

dotenv.config();

const port = process.env.SERVER_PORT || 6005;
const app = express();

// konfigurasi middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });
        }
        done(null, profile);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// routes
app.use("/api/users", userRoute);
app.use("/auth/google", googleAuthRoute);

app.listen(port, () => {
  console.log(`Your application is listening on http://localhost:${port}`);
  console.log("Useless Commit");
  connectDB();
});
