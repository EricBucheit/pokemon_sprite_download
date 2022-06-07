# pokemon sprite download
A node script to download pokemon sprites and icons from https://pokemondb.net/

This is a tool to download the sprites for many of the pokemon on pokemondb.net
I CAN'T gaurantee that they wont do something like change the path or make a unique key, so use at your own risk.

I purposely didn't make it run every possible option because I feel like spamming them would be a bad this to do, and nobody needs 5 versions of every type of pokemon. That being said, in the future I might, and if you want to, it should be easy enough to loop through the generations and bypass the argument inputs.

generations: [
    "one"
    "two"
    "three"
    "four"
    "five"
 ]

images: [
        "red-blue",
        "silver",
        "ruby-sapphire",
        "diamond-pearl",
        "black-white",
        "x-y",
        "ultra-sun-ultra-moon",
    ],
    
 
 
 obviously I should have named that better but...
 
 For obvious reasons, a pokemon from "x-y" generation will not be in the "red-blue" generation but "red-blue" will be in "x-y"
 
Usage:
  clone the repository and have node installed.
  npm install, although I think I just use npm dependencies but that may change.
  node index.js generation=one image=x-y
  node index.js generation=two image=x-y verbose
  node index.js generation=three image=x-y
  etc...

  add "verbose" to show output of curl requests.
  
  
  
  
  
  
  
