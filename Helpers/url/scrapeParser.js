var writeToFile = require('../writeToFile.js');

var html = require('./scrape.js')
var pos = 0;
var i = -1;
starts = [];
// Search the string and counts the number of e's
while (pos != -1) {
  pos = html.indexOf("data-src=", i + 1);
  starts.push(pos)
  i = pos;
}

let urls = [];
let stop = 0;
for (let index of starts) {
    let i = 10;
    let str = '';
    while (html[index + i] !== "\"") {
        str += html[index + i];
        i++;
    }
   
    urls.push(str);
}

let sanitized = [];
for (let url of urls) {
    if (url.indexOf("https://img.pokemondb.net/sprites/sword-shield/icon/") > -1) {
        let pokemon = url.split("https://img.pokemondb.net/sprites/sword-shield/icon/")[1];
        sanitized.push(pokemon);
    }
}

writeToFile("../../Lists/icons.js", `module.exports = ${JSON.stringify(sanitized, null, 2)}`);

