import { renderHook } from "@testing-library/react";
import { useOwner } from "../useOwner";

describe("unit testing useOwner", () => {
  it("should be true when same", () => {
    const { result } = renderHook(() =>
      useOwner("user123", { username: "user123" })
    );
    expect(result.current.owner).toBe(true);
  });
  it("should be false when passing falsy value", async () => {
    const { result, rerender } = renderHook(() => useOwner(undefined, null));
    expect(result.current.owner).toBe(false);
    rerender(() => useOwner("user123", null));
    expect(result.current.owner).toBe(false);
    rerender(() => useOwner(undefined, { username: "user123" }));
    expect(result.current.owner).toBe(false);
  });
});
