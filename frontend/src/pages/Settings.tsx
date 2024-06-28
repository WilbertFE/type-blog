import { Header } from "./settings/Header";
import { MyProfile } from "./settings/MyProfile";
import { SettingOptions } from "./settings/SettingOptions";
import { useMe } from "@/hooks/UseMe";

export function Settings() {
  const { myData } = useMe();
  return (
    <main className="pt-6 pb-12 bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen gap-y-8">
          {myData && (
            <>
              <Header myData={myData} />
              <MyProfile myData={myData} />
              <SettingOptions myData={myData} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
