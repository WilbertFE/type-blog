import { SignInBar } from "./home/SignInBar";
import { Description } from "./home/Description";
import { Topbar } from "./home/Topbar";
import { Searchbar } from "./home/Searchbar";
import { Menus } from "./home/Menus";
import { Blogs } from "./home/Blogs";
import { useMe } from "@/hooks/UseMe";
import { TopbarSkeleton } from "./home/skeleton/TopbarSkeleton";
import { SearchbarSkeleton } from "./home/skeleton/SearchbarSkeleton";
import { MenusSkeleton } from "./home/skeleton/MenusSkeleton";

export function Home() {
  const { myData, loading } = useMe();
  return (
    <main id="home" className="pb-32 bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen">
          {myData && !loading && (
            <>
              <Topbar />
              <Searchbar />
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
          {!myData && loading && (
            <>
              <TopbarSkeleton />
              <SearchbarSkeleton />
              <MenusSkeleton />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
