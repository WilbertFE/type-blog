import { renderHook, waitFor } from "@testing-library/react";
import { useBlogs } from "../useBlogs.ts";
import nock from "nock";

describe("unit test useBlogs hooks", () => {
  it("should return blogs data", async () => {
    const plainData = [
      { title: "My first blog", creator: "user1718101209813", content: "tes" },
    ];
    nock("http://localhost:6005")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/api/blogs")
      .reply(200, plainData);

    const { result } = renderHook(() => useBlogs());

    await waitFor(() => expect(result.current.blogs).toEqual(plainData));
  });
  it("should return null when errors", async () => {
    nock("http://localhost:6005")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/api/blogs")
      .reply(400);
    const { result } = renderHook(() => useBlogs());
    await waitFor(() => expect(result.current.blogs).toBe(null));
  });
});
