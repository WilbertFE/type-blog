import { useParams } from "react-router-dom";
import { Banner } from "./profile/Banner";
import { CallToAction } from "./profile/CallToAction";
import { Bio } from "./profile/Bio";
import { useUserUsername } from "@/hooks/useUserUsername";

export function Profile() {
  const { username } = useParams();
  const { user } = useUserUsername(username);
  return (
    <main id="profile" className="bg-primary-config">
      <div className="container px-2">
        <div className="flex flex-col min-h-screen gap-y-4">
          {user && (
            <>
              <Banner user={user} username={username} />
              <CallToAction />
              <Bio />
              <div>
                <h1 className="text-xl font-bold tracking-wide text-light-config">
                  Blog
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
