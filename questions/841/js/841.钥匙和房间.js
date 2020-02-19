/**
 * @param {number[][]} rooms
 * @return {boolean}
 * time: 72ms space: 36.1MB
 */
var canVisitAllRooms = function(rooms) {
    let n = rooms.length;
    let s = Array(n).fill(false);
    let oc = 0;
    const open = index => {
        if (s[index] === true) return true;
        else {
            s[index] = true;
            oc++;
        }
        for (const v of rooms[index]) {
            open(v);
        }
        return true;
    };
    open(0);
    return oc === n;
};
