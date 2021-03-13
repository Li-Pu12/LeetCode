/**
 * @param {string} preorder
 * @return {boolean}
 * time: 92ms space: 39MB
 */
var isValidSerialization = function (preorder) {
  let nodes = preorder.split(",");
  let index = 0;
  const isValidNode = function () {
    if (index >= nodes.length) return false;
    let res = nodes[index] === "#";
    index++;
    return res || (isValidNode() && isValidNode());
  };
  return isValidNode() && index === nodes.length;
};