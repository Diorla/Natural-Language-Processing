import postData from "./postData";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("result"),
  })
);

describe("testing posting of data", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  const url = "/form?text=abc";
  const data = { apiKey: "123" };
  it("sends query", async () => {
    const result = await postData(url, data);

    expect(result).toEqual("result");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });

  it("returns null when exception", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));

    const result = await postData(url, data);

    expect(result).toEqual(null);
  });
});
