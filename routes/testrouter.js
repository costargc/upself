let JaroWinkler = require('../controller/jaro-winkler');
var fs = require('fs');

var ChatbotDataset = JSON.parse(fs.readFileSync('./controller/data/english/ai.json'));

var usermsg = "Are you sentient?";
// var usermsg = "When will you walk?";
// var usermsg = "What is it like to be a robot?";
console.log(usermsg);
var score = [];
var indexscore = [];
// console.log(ChatbotDataset.conversations.length);

for (var i = 0; i < ChatbotDataset.conversations.length; i++) {
    // console.log(ChatbotDataset.conversations[i].user_input);
    score.push(usermsg.jaroWinkler(ChatbotDataset.conversations[i].user_input));
    if (usermsg.jaroWinkler(ChatbotDataset.conversations[i].user_input) > 0.95) {
        indexscore.push(i);
    }
}

if (indexscore.length == 0) {
    indexscore.push(score.indexOf(Math.max.apply(null, score)));
}

// console.log(indexscore);

var randomItem = indexscore[Math.floor(Math.random() * indexscore.length)];
console.log(ChatbotDataset.conversations[randomItem].response);