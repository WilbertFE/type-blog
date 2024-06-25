import { Header } from "./settings/Header";
import { MyProfile } from "./settings/MyProfile";
import { SettingOptions } from "./settings/SettingOptions";

export function Settings() {
  return (
    <main className="pt-6 pb-12 bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen gap-y-8">
          <Header />
          <MyProfile />
          <SettingOptions />
        </div>
      </div>
    </main>
  );
}
