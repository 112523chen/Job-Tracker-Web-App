import { addViewFormData } from "../components/model";
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

describe("getFormValue", () => {
  const formData: addViewFormData = {
    title: "title",
    company: "company",
    url: "url",
  };
  test("should return title", () => {
    expect(getFormValue(formData, "title")).toBe(formData.title);
  });

  test("should return company", () => {
    expect(getFormValue(formData, "company")).toEqual(formData.company);
  });

  test("should return url", () => {
    expect(getFormValue(formData, "url")).toEqual(formData.url);
  });

  test("should return Empty", () => {
    expect(getFormValue(formData, "")).toEqual("");
  });
});
