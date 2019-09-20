// include the Lo-Dash library
var _ = require("lodash");
    
var worker = function(item) {
     return _.filter(item, {active: true})
};

// export the worker function as a nodejs module
module.exports = worker;
