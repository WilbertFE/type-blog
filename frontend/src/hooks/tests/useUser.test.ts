import { renderHook, waitFor } from "@testing-library/react";
import nock from "nock";
import { useUser } from "../useUser";

describe("unit test useUser", () => {
  it("should be user data", async () => {
    const respData = {
      username: "user1718101209813",
    };
    const username = "user1718101209813";
    nock("http://localhost:6005")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get(`/api/users/${username}`)
      .reply(200, respData);

    const { result } = renderHook(() => useUser(username));
    await waitFor(() => {
      expect(result.current.user).toEqual(respData);
      expect(result.current.loading).toBe(false);
    });
  });
  it("should be null when the parameter is undefined", async () => {
    const { result } = renderHook(() => useUser(undefined));
    await waitFor(() => {
      expect(result.current.user).toBe(null);
      expect(result.current.loading).toBe(false);
    });
  });
  it("should be null when user didnt find", async () => {
    nock("http://localhost:6005")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get(`/api/users/123`)
      .reply(400);
    const { result } = renderHook(() => useUser("123"));
    await waitFor(() => {
      expect(result.current.user).toBe(null);
      expect(result.current.loading).toBe(false);
    });
  });
});
