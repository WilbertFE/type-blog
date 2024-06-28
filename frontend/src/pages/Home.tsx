import { SignInBar } from "./home/SignInBar";
import { Description } from "./home/Description";
import { Topbar } from "./home/Topbar";
import { SearchBar } from "./home/SearchBar";
import { Menus } from "./home/Menus";
import { Blogs } from "./home/Blogs";
import { useMe } from "@/hooks/UseMe";

export function Home() {
  const { myData, loading } = useMe();
  return (
    <main id="home" className="pb-32 bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen">
          {myData && !loading && (
            <>
              <Topbar />
              <SearchBar />
              <Menus />
              <Blogs />
            </>
          )}
          {!myData && !loading && (
            <>
              <SignInBar />
              <Description />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
