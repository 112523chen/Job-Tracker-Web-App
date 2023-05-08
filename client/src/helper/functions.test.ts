import {
  isNotAvailable,
  getLabel,
  getFormValue,
  getApplicationColor,
} from "./functions";

describe("isNotAvailable Tests", () => {
  test("should return add view", () => {
    const isInAddView = true;
    const isInAppView = true;
    expect(isNotAvailable(isInAddView, isInAppView)).toEqual(true);
  });
});

describe("getLabel Tests", () => {
  test("should return Job Title", () => {
    expect(getLabel("title")).toBe("Job Title");
  });

  test("should return Company", () => {
    expect(getLabel("company")).toBe("Company");
  });

  test("should return Link", () => {
    expect(getLabel("url")).toBe("Link");
  });

  test("should return Empty", () => {
    expect(getLabel("Empty")).toBe("");
  });
});
