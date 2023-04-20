// Sentence case 字符串转Title case字符串
module.exports.toTitleCase = function (str) {
    return str.toLowerCase().replace(/(^|\s)\w/g, c => c.toUpperCase());
};