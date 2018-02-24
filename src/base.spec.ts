import { sampleFunction } from "./index";

describe("This is a simple test", () => {
  test("Check the sampleFunction function", () => {
    expect(sampleFunction("hello")).toEqual("hellohello");
  });
});
