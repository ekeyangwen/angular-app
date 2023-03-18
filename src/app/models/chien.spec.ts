import { isNull } from "@angular/compiler/src/output/output_ast";
import { Chien } from "./chien";

describe("Chien", () => {
  it("should create an instance", () => {
    expect(new Chien("Roxy", 5)).toBeTruthy();
  });

  it("test dog name", () => {
    let dogName = "Roxy";
    let index=5
    const myDog = new Chien(dogName, index);
    expect(myDog.getName()).not.toBe("");
    expect(myDog.getName()).toBe(dogName);
  });
});
