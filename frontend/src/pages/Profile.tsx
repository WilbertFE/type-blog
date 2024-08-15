import { useParams } from "react-router-dom";
import { Banner } from "./profile/Banner";
import { CallToAction } from "./profile/CallToAction";
import { Bio } from "./profile/Bio";
import { TbError404 } from "react-icons/tb";
import { useUserBlogs } from "@/hooks/useUserBlogs";
import { Blog } from "./profile/Blog";
import { useMe } from "@/hooks/UseMe";
import { useOwner } from "@/hooks/useOwner";
import { useUserUsername } from "@/hooks/useUserUsername";

export function Profile() {
  const { username } = useParams();

  const { myData, setMyData } = useMe();
  const { user, isLoading } = useUserUsername(username);
  const { blogs } = useUserBlogs(username);
  const { owner, isLoading: loadingOwner } = useOwner(username, myData);

  return (
    <main id="profile" className="pb-12 bg-primary-config">
      <div className="container px-2">
        <div className="flex flex-col min-h-screen gap-y-4">
          {user && !isLoading && blogs && myData && !loadingOwner && (
            <>
              <Banner
                user={user}
                myData={myData}
                owner={owner}
                setMyData={setMyData}
              />
              <CallToAction />
              <Bio />
              {blogs && blogs.length > 0 && (
                <div>
                  <h1 className="mb-8 text-xl font-bold tracking-wide text-center text-slate-500">
                    -- Blog --
                  </h1>
                  <div className="flex flex-col w-full gap-y-4">
                    {blogs.map((blog) => (
                      <Blog
                        key={blog._id}
                        blog={blog}
                        user={user}
                        owner={owner}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          {!user && !isLoading && !loadingOwner && (
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
