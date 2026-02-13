_javascript code_

`// word-counter.js
function countWords(text) {
return text.split(/\s+/).filter(word => word.length > 0).length;
}
module.exports = countWords;`
