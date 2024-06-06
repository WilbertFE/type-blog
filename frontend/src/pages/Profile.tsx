import { useParams } from "react-router-dom";
import { Banner } from "./profile/Banner";

export function Profile() {
  const { username } = useParams();

  return (
    <main id="profile" className="bg-primary-config">
      <div className="container px-2">
        <div className="flex flex-col min-h-screen">
          <Banner username={username} />
          <div>
            <p className="text-center text-light-config">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              nostrum!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
