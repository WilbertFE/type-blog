import nock from "nock";
import { renderHook, waitFor } from "@testing-library/react";
import { useUserBlogs } from "../useUserBlogs";

describe("unit testing useUserBlogs", () => {
  it("should return blogs data when success", async () => {
    const resp = [
      { title: "My first blog", creator: "user123", content: "tes" },
    ];
    nock("http://localhost:6005")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/api/blogs/user123")
      .reply(200, resp);
    const { result } = renderHook(() => useUserBlogs("user123"));
    await waitFor(() => {
      expect(result.current.blogs).toEqual(resp);
    });
  });
  it("should null when username is falsy", async () => {
    const { result } = renderHook(() => useUserBlogs(undefined));
    expect(result.current.blogs).toBe(null);
  });
});
