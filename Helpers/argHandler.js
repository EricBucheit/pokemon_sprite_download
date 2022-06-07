const ErrorHandler = require('./ErrorHandler');
let argHandler = {
    
    verbose: false,
    all: false,
    generation: false,
    image: false,

    parse: function (args, lists) {
        for (let arg of args) {

            if (arg === "help") {
                this.help(lists);
                return ;
            }

            if (arg === "verbose") {
                this.verbose = true
            }
    
            if (arg === "all") {
                this.all = true;
            }
    
            if (arg.indexOf("generation") > -1) {
                generation = arg.split("=")[1];
                this.generation = generation;
            }

            if (arg.indexOf("image") > -1) {
                image = arg.split("=")[1];
                this.image = image;
            }
        }

        if (!this.generation) {
            this.usage(lists);
            throw new ErrorHandler("Args not handled", "arg error");
        }

        if (!this.image) {
            this.usage(lists);
            throw new ErrorHandler("Args not handled", "arg error");
        }

        console.log("\navailable image sets:");

        let exists = false;
        for (let image of lists[this.generation].generation) {
            console.log("\t" + image);
            if (image === this.image) {
                exists = true
            }

        }
        console.log("\n");

        if (!exists) {
            throw new ErrorHandler("Specify a different image set for these.", "arg error");
        };


    },

    usage: function(lists) {
        // let generations = Object.keys(lists).join("\n\t\t");
        let Reset = "\x1b[0m"
        let Underscore = "\x1b[4m"

        console.log(`${Underscore}\n\nUsage: node index.js generation=one image='red-blue'\n${Reset}`);
        console.log("current Supported Generations\n");
        
        let generations = Object.keys(lists);
        for (let gen of generations) {
            console.log(`\tgeneration=${gen}`);
            for (let image of lists[gen].generation) {
                console.log(`\t\timage=${image}`);
            }
            console.log('\n')
        }

    },

    help(lists) {
        this.usage(lists);
    }


}


module.exports = argHandler;