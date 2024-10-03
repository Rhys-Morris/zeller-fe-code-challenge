import { titleCase } from "../string";

describe("titleCase", () => {
  it("should handle an empty string", () => {
    expect(titleCase("")).toBe("");
  });

  it("should format a string of length 1", () => {
    expect(titleCase("a")).toBe("A");
  });

  it("should format all other length strings", () => {
    expect(titleCase("sLaRTiBartFast")).toBe("Slartibartfast");
  });
});
