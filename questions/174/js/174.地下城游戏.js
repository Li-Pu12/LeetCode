/**
 * @param {number[][]} dungeon
 * @return {number}
 * time: 76ms space:36.4MB
 */
var calculateMinimumHP = function (dungeon) {
    let rlen = dungeon.length;
    let clen = dungeon[0].length;
    for (let i = rlen - 1; i >= 0; i--) {
        for (let j = clen - 1; j >= 0; j--) {
            dungeon[i][j] = Math.max(
                i === rlen - 1
                    ? j === clen - 1
                        ? -dungeon[i][j]
                        : dungeon[i][j + 1] - dungeon[i][j]
                    : j === clen - 1
                    ? dungeon[i + 1][j] - dungeon[i][j]
                    : Math.min(
                          dungeon[i][j + 1] - dungeon[i][j],
                          dungeon[i + 1][j] - dungeon[i][j]
                      ),
                0
            );
        }
    }
    return dungeon[0][0] + 1;
};
