const gen_one = require('./Gen_1.js');
const gen_two = require('./Gen_2.js');
const gen_three = require('./Gen_3.js');
const gen_four = require('./Gen_4.js');
const gen_five = require('./Gen_5.js');

const icons = require('./icons');

function makeGeneration(pokemon_generation_list, pokemon_generation, saveFolder) {
        let gen = {
            pokemon: pokemon_generation_list, 
            saveFolder: saveFolder,
            apiBasePath: "https://img.pokemondb.net/sprites",
            normal: false,
            shiny: false,
    
            generation: [
                "red-blue",
                "silver",
                "ruby-sapphire",
                "diamond-pearl",
                "black-white",
                "x-y",
                "ultra-sun-ultra-moon",
            ],

            getGeneration: function(gen) {
                for (let i = 0; i < this.generation.length; i++) {
                    if (this.generation[i] === gen) {
                        return i
                    }
                }
            },

            getGenerationCount() {
                return this.generation.length
            },
    
            getSheen: function() {
                if (this.normal) {
                    return "normal"
                }
    
                if (this.shiny) {
                    return "shiny"
                }
    
                return "normal";
            },
    
            getApiPath: function (generation, pokemon) {
                return (`${this.apiBasePath}/${this.generation[generation]}/${this.getSheen()}/${pokemon.toLowerCase()}.png`);
            },
            
            getSavePath: function(generation) {
                return `${this.saveFolder}/${this.generation[generation]}`
            },

            getSaveFile: function(generation, pokemon) {
                return `${this.saveFolder}/${this.generation[generation]}/${pokemon.toLowerCase()}.png`
            }
        }

        gen.generation.splice(0, pokemon_generation);
        return gen;

}

function iconGeneration() {
    let icon = makeGeneration(icons, 0, "images/icons");
    icon.apiBasePath = "https://img.pokemondb.net/sprites/sword-shield/icon";

    icon.getApiPath = function(generation, pokemon) {
        return `${this.apiBasePath}/${pokemon}`;
    }

    icon.getSavePath = function() {
        return `${this.saveFolder}/icons`
    }

    icon.getSaveFile = function(image_generation, pokemon) {
        console.log(pokemon)
        return `${this.saveFolder}/icons/${pokemon.toLowerCase()}` 
    } 

    icon.generations = [];

    return icon
}


module.exports = {
    one: makeGeneration(gen_one, 0, "Images/generation_1"),  
    two: makeGeneration(gen_two, 1, "Images/generation_2"),
    three: makeGeneration(gen_three, 2, "Images/generation_3"),
    four: makeGeneration(gen_four, 3, "Images/generation_4"),
    five: makeGeneration(gen_five, 4, "Images/generation_5"),
    icons: iconGeneration(),
}
