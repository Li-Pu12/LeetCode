/**
 * @param {string[]} words
 * @return {number}
 * time: 188ms space: 60.3MB
 */
var minimumLengthEncoding = function(words) {
    if (words.length === 0) return 0;
    class TreeNode extends Map {
        addChildren(c) {
            if (c.length === 0) return;
            let sc = c[c.length - 1];
            if (!this.has(sc)) this.set(sc, new TreeNode());
            if (c.length > 1)
                this.get(sc).addChildren(c.substr(0, c.length - 1));
        }
        getLength() {
            if (this.size === 0) {
                return [1];
            } else {
                let result = [];
                for (const value of this.values()) {
                    result.push(...value.getLength().map(value => value + 1));
                }
                return result;
            }
        }
    }
    let t = new TreeNode();
    for (const word of words) {
        t.addChildren(word);
    }
    return t.getLength().reduce((a, b) => a + b);
};
