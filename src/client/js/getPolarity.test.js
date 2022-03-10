import getPolarity from "./getPolarity";

describe("get polarity", () => {
  it("should return the appropriate polarity", () => {
    expect(getPolarity("P+")).toBe("Strong positive");
    expect(getPolarity("P")).toBe("Positive");
    expect(getPolarity("NEU")).toBe("Neutral");
    expect(getPolarity("N")).toBe("Negative");
    expect(getPolarity("N+")).toBe("Strong negative");
    expect(getPolarity("")).toBe("No polarity");
  });
});
