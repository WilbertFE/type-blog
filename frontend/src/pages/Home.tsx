import { SignInBar } from "./home/SignInBar";
import { Description } from "./home/Description";
import { Topbar } from "./home/Topbar";
import { SearchBar } from "./home/SearchBar";
import { Menus } from "./home/Menus";
import { Blogs } from "./home/Blogs";
import { useMe } from "../hooks/useMe.tsx";

export function Home() {
  const { user, loading } = useMe();
  return (
    <main id="home" className="pb-32 bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen">
          {user && !loading && (
            <>
              <Topbar user={user} />
              <SearchBar />
              <Menus user={user} />
              <Blogs />
            </>
          )}
          {!user && !loading && (
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
