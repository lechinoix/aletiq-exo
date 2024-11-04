type SerializedTreeNode = {
    val: number;
    left: SerializedTreeNode | null;
    right: SerializedTreeNode | null;
};

/**
 * Definition for a binary tree node.
 */
export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val;
        this.left = left ?? null;
        this.right = right ?? null;
    }

    serializeNode = (): SerializedTreeNode => {
        return {
            val: this.val,
            left: this.left ? this.left.serializeNode() : null,
            right: this.right ? this.right.serializeNode() : null,
        };
    };
}

export const serialize = (root: TreeNode): string => {
    return JSON.stringify(root.serializeNode());
};

export const deserialize = (data: string): TreeNode | null => {
    const root = JSON.parse(data) as SerializedTreeNode | null;

    return deserializeDict(root);
};

const deserializeDict = (
    currentNode: SerializedTreeNode | null
): TreeNode | null => {
    if (currentNode === null) return null;

    return new TreeNode(
        currentNode.val,
        deserializeDict(currentNode.left),
        deserializeDict(currentNode.right)
    );
};
