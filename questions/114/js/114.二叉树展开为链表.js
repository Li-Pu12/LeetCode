/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * time: 100ms space: 40.1ms
 */
var flatten = function (root) {
    const bind = (r) => {
        if (r == null) return null;
        let t = r;
        if (!t.left) return bind(t.right) || t;
        let right = t.right;
        t.right = t.left;
        t.left = null;
        t = bind(t.right);
        t.right = right;
        return bind(t.right) || t;
    };
    bind(root);
};
