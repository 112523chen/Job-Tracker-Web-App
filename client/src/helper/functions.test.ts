import { isNotAvailable } from "./functions";

describe("isNotAvailable Test", () => {
  test("should return add view", () => {
    const isInAddView = true;
    const isInAppView = true;
    expect(isNotAvailable(isInAddView, isInAppView)).toEqual(true);
  });
});
