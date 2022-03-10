import createElement from "./createElement";

jest.mock("./createElement");
describe("testing creating element", () => {
  test("Append list item after data fetch", () => {
    document.body.innerHTML = `<body><dl></dl></body>`;

    createElement("title", "content");
    expect(createElement).toBeCalled();
    expect(createElement).toBeCalledWith("title", "content");
  });
});
