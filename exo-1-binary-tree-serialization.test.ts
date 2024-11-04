import { describe, expect, it } from "bun:test";
import {
    deserialize,
    serialize,
    TreeNode,
} from "./exo-1-binary-tree-serialization";

const exampleBinaryTree = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: {
        val: 3,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null },
    },
};

describe("Binary tree serializer", () => {
    it("should return the serialized binary tree", () => {
        const root = new TreeNode(
            1,
            new TreeNode(2),
            new TreeNode(3, new TreeNode(4), new TreeNode(5))
        );

        expect(serialize(root)).toBe(JSON.stringify(exampleBinaryTree));
    });

    it("should return the rightest branch value", () => {
        expect(
            deserialize(JSON.stringify(exampleBinaryTree))?.right?.right?.val
        ).toBe(5);
    });
});
