
import { describe, it, expect } from "vitest";
import { twoSum } from "../problems/arrays/twoSum.js";

describe("twoSum", () => {
  it("should find indices that add up to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("should return empty if no solution", () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });
});
