/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 * time: 60ms space: 33.6MB
 */
var calcEquation = function(equations, values, queries) {
  let map = {};
  function Variable(val, unit) {
    this.val = val;
    this.unit = unit;
    this.down = () => {
      while (map[this.unit].unit !== this.unit) {
        this.val = this.val * map[this.unit].val;
        this.unit = map[this.unit].unit;
      }
    };
  }
  for (let i = 0; i < equations.length; i++) {
    if (!map[equations[i][0]]) {
      if (!map[equations[i][1]]) {
        map[equations[i][1]] = new Variable(1, equations[i][1]);
      } else map[equations[i][1]].down();
      map[equations[i][0]] = new Variable(
        map[equations[i][1]].val * values[i],
        map[equations[i][1]].unit
      );
    } else {
      if (!map[equations[i][1]]) {
        map[equations[i][1]] = new Variable(
          map[equations[i][0]].val / values[i],
          map[equations[i][0]].unit
        );
      } else {
        if (map[equations[i][0]].unit === equations[i][0]) {
          map[equations[i][0]] = new Variable(
            values[i] * map[equations[i][1]].val,
            map[equations[i][1]].unit
          );
        } else {
          map[equations[i][0]].down();
          map[map[equations[i][0]].unit] = new Variable(
            (map[equations[i][1]].val * values[i]) / map[equations[i][0]].val,
            map[equations[i][1]].unit
          );
          map[equations[i][0]].down();
        }
      }
    }
  }
  let res = [];
  for (const query of queries) {
    if (!map[query[1]] || !map[query[0]]) {
      res.push(-1.0);
      continue;
    } else if (map[query[0]].unit !== map[query[1]].unit) {
      map[query[0]].down();
      map[query[1]].down();
    }
    if (map[query[0]].unit !== map[query[1]].unit) {
      res.push(-1.0);
    } else {
      res.push(map[query[0]].val / map[query[1]].val);
    }
  }
  return res;
};