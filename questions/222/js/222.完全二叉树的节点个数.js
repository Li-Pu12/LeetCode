/**
 * @param {TreeNode} root
 * @return {number}
 * time: 104ms space: 45MB
 */
var getHeight = root => (root === null ? 0 : getHeight(root.left) + 1);
var countNodes = function(root) {
    if (root === null) return 0;
    let leftheight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    return leftheight === rightHeight
        ? (1 << leftheight) + countNodes(root.right)
        : countNodes(root.left) + (1 << rightHeight);
};
