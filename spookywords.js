const input = require('readline-sync');

let wordList = ["cat", "bat", "tentacles", "ghost", "pumpkin", "cupcake", "spooky knife", "ghoul", "chainsaw", "rat", "zombie", "witch", "skull", "slenderman", "coffin", "vampire", "tax collector", "undead pirate", "jack-o-lantern", "vulture", "alien", "blob", "werewolf", "Dave"]

let groupNum = input.question(`how many spooky words do you want? (max ${wordList.length}):  `);

let index;
for (i=0; i < groupNum; i++) {
    index = Math.floor(Math.random()*wordList.length);
    console.log(wordList[index]);
    wordList.splice(index, 1);
}