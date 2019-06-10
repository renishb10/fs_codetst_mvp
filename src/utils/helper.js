const groupBy = (objArr, key) => {
  return objArr.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const getMaxInObj = obj => {
  let max = Object.keys(obj)[0];
  for (let key in obj) {
    if (obj[key] > obj[max]) {
      max = key;
    }
  }

  return {
    team: max,
    score: obj[max]
  };
};

module.exports = {
  groupBy,
  getMaxInObj
};
