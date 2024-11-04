import { describe, expect, it } from "bun:test";
import { isMatch } from "./exo-2-regexp";

describe("Manual regexp", () => {
    it("should not match (example 1)", () => {
        expect(isMatch("aa", "a")).toBe(false);
    });

    it("should match with repeating (example 2)", () => {
        expect(isMatch("aa", "a*")).toBe(true);
    });

    it("should match with wildcard (example 3)", () => {
        expect(isMatch("aa", ".*")).toBe(true);
    });
    it("should match with wildcard with following character", () => {
        expect(isMatch("bcba", ".*a")).toBe(true);
    });
    it("should not match with wildcard with wrong ending character", () => {
        expect(isMatch("abab", ".*a")).toBe(false);
    });

    it("should match with followind character inside first match", () => {
        expect(isMatch("bcaba", ".*a")).toBe(true);
    });
});
