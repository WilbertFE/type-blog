import { Header } from "./settings/Header";
import { MyProfile } from "./settings/MyProfile";
import { SettingOptions } from "./settings/SettingOptions";
import { useMe } from "@/hooks/UseMe";
import { useParams } from "react-router-dom";
import { useOwner } from "@/hooks/useOwner";
import { TbError404 } from "react-icons/tb";

export function Settings() {
  const { username } = useParams();
  const { myData, loading, setMyData } = useMe();
  const { owner, loadingOwner } = useOwner(username, myData);

  return (
    <main className="pt-6 pb-12 bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen gap-y-8">
          {myData && owner && !loading && !loadingOwner && (
            <>
              <Header />
              <MyProfile myData={myData} />
              <SettingOptions myData={myData} setMyData={setMyData} />
            </>
          )}
          {!owner && !loading && !loadingOwner && (
            <div className="flex flex-col items-center m-auto">
              <TbError404 size={128} className="text-light-config" />
              <h1 className="text-xl font-bold tracking-wide text-light-config">
                Not Authorized
              </h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
