/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 * time: 304ms space:69.7MB
 */

var respace = function (dictionary, sentence) {
    let dicRoot = Object.create(null);
    const buildDicNode = (node, word, index) => {
        if (index === word.length) {
            node.isEnd = true;
        } else {
            let ch = word.substr(index, 1);
            node[ch] = node[ch] || Object.create(null);
            buildDicNode(node[ch], word, index + 1);
        }
    }
    dictionary.forEach(word => buildDicNode(dicRoot, word, 0));
    let res = Array(sentence.length + 1).fill(sentence.length);
    const searchSentenceWords = (node, start, index) => {
        if (index === sentence.length) {
            res[start] = index - start;
        } else {
            let ch = sentence.substr(index, 1);
            if (node[ch]) {
                searchSentenceWords(node[ch], start, index + 1);
            }
        }
        let r = node.isEnd?  res[index] :  res[index + 1] + index + 1 - start ;
        if (r < res[start]) res[start] = r;
    }
    res[sentence.length] = 0;
    for (let i = sentence.length - 1; i >= 0; i--){
        searchSentenceWords(dicRoot, i, i);
    }
    return res[0];
};