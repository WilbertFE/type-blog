import { useParams } from "react-router-dom";
import { Banner } from "./profile/Banner";
import { CallToAction } from "./profile/CallToAction";
import { Bio } from "./profile/Bio";
import { TbError404 } from "react-icons/tb";
import { useUser } from "@/hooks/useUser";
import { useUserBlogs } from "@/hooks/useUserBlogs";
import { Blog } from "./home/Blog";

export function Profile() {
  const { username } = useParams();
  const { user, loading } = useUser(username);
  const { blogs } = useUserBlogs(username);

  return (
    <main id="profile" className="pb-12 bg-primary-config">
      <div className="container px-2">
        <div className="flex flex-col min-h-screen gap-y-4">
          {user && !loading && (
            <>
              <Banner user={user} username={username} />
              <CallToAction />
              <Bio />
              {blogs && blogs.length > 0 && (
                <div>
                  <h1 className="mb-8 text-xl font-bold tracking-wide text-center text-slate-500">
                    -- Blog --
                  </h1>
                  <div className="flex flex-col w-full gap-y-4">
                    {blogs.map((blog) => (
                      <Blog key={blog._id} blog={blog} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          {!user && !loading && (
            <div className="flex flex-col items-center m-auto">
              <TbError404 size={128} className="text-light-config" />
              <h1 className="text-xl font-bold tracking-wide text-light-config">
                User not found
              </h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
