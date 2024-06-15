import { GeneralSettings } from "./settings/GeneralSettings";
import { Header } from "./settings/Header";
import { MyProfile } from "./settings/MyProfile";

export function Settings() {
  return (
    <main className="pb-32 bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen gap-y-8">
          <Header />
          <MyProfile />
          <GeneralSettings />
        </div>
      </div>
    </main>
  );
}
