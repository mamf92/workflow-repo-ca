import { describe, expect, it, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("returns the username from localStorage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "testUser" }));
    expect(getUsername()).toBe("testUser");
  });
  it("returns null if no user exists", () => {
    expect(getUsername()).toBe(null);
  });
});
