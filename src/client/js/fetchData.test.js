import fetchData from "./fetchData";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ apiKey: "123" }),
  })
);

describe("testing fetching data", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  const url = "/form?text=abc";
  it("sends query", async () => {
    const result = await fetchData(url);

    expect(result).toEqual({ apiKey: "123" });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("returns null when exception", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));

    const result = await fetchData(url);

    expect(result).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});
