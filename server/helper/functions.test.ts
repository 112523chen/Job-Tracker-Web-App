import { getDays } from "./functions";

describe("get Days Function", () => {
  test("should return 7", () => {
    expect(getDays("week")).toEqual("7");
  });

  test("should return 14", () => {
    expect(getDays("week2")).toEqual("14");
  });

  test("should return 30", () => {
    expect(getDays("month")).toEqual("30");
  });

  test("should return 90", () => {
    expect(getDays("month3")).toEqual("90");
  });

  test("should return 180", () => {
    expect(getDays("month6")).toEqual("180");
  });
});
