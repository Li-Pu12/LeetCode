/**
 * @param {number} length
 * time: 524ms space: 67.6MB
 */
 var SnapshotArray = function(length) {
    this._patches = [];
    this._patch = {};
    this._snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this._patch[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this._patches.push(this._patch);
    this._patch = {};
    return this._snapId++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    for(let i = snap_id; i>=0 ;i--){
        if(this._patches[i][index] !== undefined){
            return this._patches[i][index];
        }
    }
    return 0;
};