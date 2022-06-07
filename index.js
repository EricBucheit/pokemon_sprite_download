
var util = require('util');
var exec = require('child_process').exec;
var fs = require('fs');
var mkdir = require('./Helpers/mkdir')
var writeToFile = require('./Helpers/writeToFile')
var argHandler = require('./Helpers/argHandler')
var ErrorHandler = require('./Helpers/ErrorHandler');
const lists = require('./Lists');

const download = (list) => {
    let generations = list.getGenerationCount();
    let image_generation = list.getGeneration(argHandler.image);
    mkdir(list.getSavePath(image_generation));
    for (let pokemon of list.pokemon) {
        try {
            var command = `curl -f ${list.getApiPath(image_generation, pokemon)} --output ${list.getSaveFile(image_generation, pokemon)}`
            child = exec(command, function(error, stdout, stderr){
                if (argHandler.verbose) {
                    console.log('stdout: ' + stdout);
                    console.log('stderr: ' + stderr);
                }
                if(error !== null) {
                    console.log('exec error: ' + error);
                }
            })
        } catch (e) {
            console.log(e);
        }
    }
}

try {
    argHandler.parse(process.argv, lists);
    download(lists[argHandler.generation]);
} catch(e) {
    let Reset = "\x1b[0m"
    let Red = "\x1b[31m";

    console.log(Red);
    console.error(`\n ${e.message} \n `)
    console.log(Reset);
}

// download(list[argHandler.generation]);



// download(lists.gen_two)
// download(lists.gen_two)




