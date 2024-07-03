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
import { useBlogs } from "@/hooks/useBlogs";
import { BlogSkeleton } from "./home/skeleton/BlogSkeleton";

export function Home() {
  const { myData, loading } = useMe();
  const { blogs, loading: blogsLoading } = useBlogs();
  return (
    <main id="home" className="pb-32 bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen">
          {loading && blogsLoading && (
            <>
              <TopbarSkeleton />
              <SearchbarSkeleton />
              <MenusSkeleton />
              <div className="flex flex-col mt-8">
                <h1 className="mb-2 text-xl font-bold tracking-wide text-light-config">
                  All Blogs
                </h1>
                <div className="flex flex-col gap-y-6">
                  {"12345".split("").map((i) => (
                    <BlogSkeleton key={i} />
                  ))}
                </div>
              </div>
            </>
          )}
          {myData && !loading && !blogsLoading && blogs && (
            <>
              <Topbar />
              <Searchbar />
              <Menus />
              <Blogs blogs={blogs} />
            </>
          )}
          {!myData && !loading && !blogsLoading && (
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
