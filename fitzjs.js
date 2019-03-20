'use strict';
var moment = require('moment');

module.exports = function(dateString, dateFormat) {
    return moment(dateString, dateFormat).toISOString();
};