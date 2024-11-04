import { describe, expect, it } from "bun:test";
import { isMatch } from "./exo-2-regexp";
import { reachableNodes } from "./exo-3-reachable-nodes";

describe("Manual regexp", () => {
    it("should find 13 reachable nodes (example 1)", () => {
        expect(
            reachableNodes(
                [
                    [0, 1, 10],
                    [0, 2, 1],
                    [1, 2, 2],
                ],
                6,
                3
            )
        ).toBe(13);
    });

    it("should find 23 reachable nodes (example 2)", () => {
        expect(
            reachableNodes(
                [
                    [0, 1, 4],
                    [1, 2, 6],
                    [0, 2, 8],
                    [1, 3, 1],
                ],
                10,
                4
            )
        ).toBe(23);
    });

    it("should find 1 reachable nodes (example 3)", () => {
        expect(
            reachableNodes(
                [
                    [1, 2, 4],
                    [1, 4, 5],
                    [1, 3, 1],
                    [2, 3, 4],
                    [3, 4, 5],
                ],
                17,
                5
            )
        ).toBe(13);
    });
});
