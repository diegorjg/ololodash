const _ = require("lodash");

var wordsmodify = function (lol) {
    return _.chain(lol)
      .map(item => item + 'Chained')
      .map(item => item.toUpperCase())
      .sortBy()
      .value();
};

module.exports = wordsmodify;