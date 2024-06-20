import { renderHook, waitFor } from "@testing-library/react";
import { useLogin } from "../useLogin";
import nock from "nock";

describe("unit test useLogin", () => {
  it("should be true", async () => {
    nock("http://localhost:6005")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/api/auth")
      .reply(200);
    const { result } = renderHook(() => useLogin());
    await waitFor(() => {
      expect(result.current.login).toBe(true);
    });
  });
  it("should be false", async () => {
    nock("http://localhost:6005")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
        "access-control-allow-credentials": "true",
      })
      .get("/api/auth")
      .reply(401);
    const { result } = renderHook(() => useLogin());
    await waitFor(() => {
      expect(result.current.login).toBe(false);
    });
  });
});
