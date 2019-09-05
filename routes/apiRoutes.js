let AnalyzeMessage = require("../controller/AnalyzeMessage.js");
let JaroWinkler = require('../controller/jaro-winkler.js');
// let ChatbotDataset = require('../controller/data/english/ai.json');
var fs = require('fs');
// var ChatbotDataset = JSON.parse(fs.readFileSync('./controller/data/english/trivia.json'));
var ChatbotDataset = loadconversationfiles();

const router = require("express").Router();

// Post route for receiving user's message and returning IBM Watson's Analysis
router.post("/analyzeMessage", function (req, res) {
  console.log(req.body.params);

  new AnalyzeMessage(req.body.params.userMessage).emotion.then(function (
    result
  ) {
    console.log("Emotion results: ", result);
    res.json(result);
  });
});

router.post("/jaroMessage", function (req, res) {

  // console.log(req.body.params.userMessage);
  // ChatbotDataset = JSON.parse(ChatbotDataset);
  // console.log(ChatbotDataset.conversations.length);

  var usermsg = req.body.params.userMessage;
  var score = [];
  var indexscore = [];
  // console.log(ChatbotDataset.conversations.length);


  for (var i = 0; i < ChatbotDataset.conversations.length; i++) {
    // console.log(ChatbotDataset.conversations[i].user_input);
    if (usermsg.jaroWinkler(ChatbotDataset.conversations[i].user_input) === NaN) {
      score.push(0);
    }
    else {
      score.push(usermsg.jaroWinkler(ChatbotDataset.conversations[i].user_input));
    }
    if (usermsg.jaroWinkler(ChatbotDataset.conversations[i].user_input) > 0.95) {
      indexscore.push(i);
    }
  }

  if (indexscore.length == 0) {
    indexscore.push(score.indexOf(Math.max.apply(null, score)));
  }

  // console.log(score);

  var randomItem = indexscore[Math.floor(Math.random() * indexscore.length)];
  if (randomItem < 0) {
    randomItem = 0;
  }
  // console.log(randomItem);
  // console.log(ChatbotDataset.conversations[randomItem].response);

  res.json(ChatbotDataset.conversations[randomItem].response);
  // return ChatbotDataset.conversations[randomItem].response;
});



// add loadconversation to a diferent function.
function loadconversationfiles() {
  var fs = require('fs');
  var ChatbotDataset = JSON.parse(fs.readFileSync('./controller/data/english/ai.json'));

  // market elements are returning an error...
  datavector = [
    // "ai","computers", "conversations", "emotion", "health", "literature", "psychology", "sports"
    "botprofile", "food", "gossip", "greetings", "history", "humor", "money", "movies", "politics", "science", "trivia"];

  var mergefile = [];
  // for (var j = 0; j < datavector.length; j++) {
  for (var j = 0; j < datavector.length; j++) {
    mergefile[j] = JSON.parse(fs.readFileSync('./controller/data/english/' + datavector[j] + '.json'));
    for (var i = 0; i < mergefile[j].conversations.length; i++) {
      ChatbotDataset.conversations.push(mergefile[j].conversations[i]);
    }
  }

  // console.log(ChatbotDataset);

  // fs.writeFile("./controller/data/english/checkme.json", JSON.stringify(ChatbotDataset), function (err) {
  //   if (err) {
  //     console.log(err);
  //   }
  // })

  return ChatbotDataset;
}

module.exports = router;
