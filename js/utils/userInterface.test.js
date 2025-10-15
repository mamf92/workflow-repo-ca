import { isActivePath } from "./userInterface";
import { it, describe, expect } from "vitest";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });
  it("returns true when href is '/' and current path is '/'", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });
  it("returns true when href is '/' and current path is '/index.html'", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });
  it("returns true when current path includes href", () => {
    expect(isActivePath("/about", "/about/ourstory")).toBe(true);
  });
  it("returns false when paths do not match", () => {
    expect(isActivePath("/about", "/register")).toBe(false);
  });
});
