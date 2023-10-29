let wordList = ["cat", "bat", "tentacles", "ghost", "pumpkin", "cupcake", "spooky knife", "ghoul", "chainsaw", "rat", "zombie", "witch", "skull", "slenderman", "coffin", "vampire", "tax collector", "undead pirate", "jack-o-lantern", "vulture", "alien", "blob", "werewolf", "Dave"]
// console.log(wordList.length);
// console.log(index);

let groupNum = 8;
let index;

for (i=0; i < groupNum; i++) {
    index = Math.floor(Math.random()*wordList.length);
    console.log(wordList.length, wordList[index]);
    wordList.splice(index, 1);
}