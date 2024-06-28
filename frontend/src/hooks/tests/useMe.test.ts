import { renderHook, waitFor } from "@testing-library/react";
import nock from "nock";
import { useMe } from "../UseMe";

describe("unit test useMe hooks", () => {
  it("should be my data", async () => {
    const plainData = {
      googleId: "123",
      email: "wilbert@gmail.com",
      displayName: "Wilbert",
      username: "user123",
      image: "",
    };
    nock("http://localhost:6005")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/api/users/me")
      .reply(200, plainData);
    const { result } = renderHook(() => useMe());
    await waitFor(() => {
      expect(result.current.user).toEqual(plainData);
      expect(result.current.loading).toBe(false);
    });
  });
  it("should be null when errors", async () => {
    nock("http://localhost:6005")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/api/users/me")
      .reply(401);
    const { result } = renderHook(() => useMe());
    await waitFor(() => {
      expect(result.current.user).toBe(null);
      expect(result.current.loading).toBe(false);
    });
  });
});
