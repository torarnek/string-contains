"use strict";

module.exports = function (src, searchString) {
    return src.indexOf(searchString) >= 0;
};