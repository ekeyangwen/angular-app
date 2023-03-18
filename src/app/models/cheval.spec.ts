import { Cheval } from "./cheval";

describe("Cheval", () => {
  it("should create an instance", () => {
    expect(new Cheval("Bernardo", 6)).toBeTruthy();
  });

  it("test horse name", () => {
    let horseName = "Bernardo";
    let index = 5;
    const myHorse = new Cheval(horseName, index);
    expect(myHorse.getName()).not.toBe("");
    expect(myHorse.getName()).toBe(horseName);
  });
});
