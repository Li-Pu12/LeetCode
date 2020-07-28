/**
 * @param {TreeNode} root
 * @return {number}
 * time: 92ms space: 40.1ms
 */
var maxDepth = function (root) {
    if (root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
