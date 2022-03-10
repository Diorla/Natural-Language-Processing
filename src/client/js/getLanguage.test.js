import getLanguage from "./getLanguage";

describe("testing text language generalization", () => {
  test("should return the appropriate language", () => {
    expect(getLanguage("Science_en")).toBe("Science English");
    expect(getLanguage("sport_en")).toBe("sport English");
    const randomText = Date.now().toString(32);
    +"_en";
    expect(getLanguage(randomText)).toBe(`${randomText} English`);
  });
});
