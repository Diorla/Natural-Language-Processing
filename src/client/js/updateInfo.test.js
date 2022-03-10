import updateInfo from "./updateInfo";
import createElement from "./createElement";
import getPolarity from "./getPolarity";
import getLanguage from "./getLanguage";

jest.mock("./createElement");
jest.mock("./getPolarity");
jest.mock("./getLanguage");
describe("update Info", () => {
  it("should called appropriate createElement", () => {
    //createElement("title", "content");
    updateInfo({});
    expect(createElement).toBeCalled();
    expect(createElement).toHaveBeenCalledTimes(6);
    expect(getPolarity).toBeCalled();
    expect(getPolarity).toHaveBeenCalledTimes(1);
    expect(getLanguage).toBeCalled();
    expect(getLanguage).toHaveBeenCalledTimes(1);
  });
});
