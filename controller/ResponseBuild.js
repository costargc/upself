var jarodistance = require('jaro-winkler');
var fs = require('fs');

var ResponseBuild = function (userMessage) {
    var ChatbotDataset = loadconversationfiles();
    var usermsg = userMessage;
    var score = [];
    var indexscore = [];

    // thse are all responses that upsy has:
    console.log("ChatbotDataset size: " + ChatbotDataset.conversations.length);

    // get all scores + select select +0.95 responses
    for (var i = 0; i < ChatbotDataset.conversations.length; i++) {
        // console.log(ChatbotDataset.conversations[i].user_input);
        // console.log(usermsg.jaroWinkler(ChatbotDataset.conversations[i].user_input));
        jarodata = jarodistance(usermsg, ChatbotDataset.conversations[i].user_input, { caseSensitive: false });
        score.push(jarodata);

        if (isNaN(score[i])) {
            score[i] = 0;
        }

        if (score[i] > 0.95) {
            indexscore.push(i);
        }

    }

    // select best responses if none has a 0.95 score (nax_score - 0.1)
    if (indexscore.length == 0) {
        var max_score = Math.max.apply(null, score);
        for (i = 0; i < ChatbotDataset.conversations.length; i++) {
            jarodata = jarodistance(usermsg, ChatbotDataset.conversations[i].user_input, { caseSensitive: false });
            if (jarodata > (max_score - 0.05) && isNaN(score[i]) == false) {
                indexscore.push(i);
            }
        }
    }

    // console.log(score);

    // randomize response
    var randomItem = indexscore[Math.floor(Math.random() * indexscore.length)];
    if (randomItem < 0 || randomItem == undefined) {
        // if (randomItem < 0 || randomItem==undefined) {
        randomItem = 0;
    }
    // // console.log(randomItem);
    // // console.log(ChatbotDataset.conversations[randomItem].response);

    // // console.log(ChatbotDataset.conversations[randomItem]);
    // res.json(ChatbotDataset.conversations[randomItem].response);
    // Debug
    console.log("test jaro: " + jarodistance("hey", "hey", { caseSensitive: false }));

    console.log("Inner Console: " + ChatbotDataset.conversations[randomItem].user_input);
    return ChatbotDataset.conversations[randomItem].response;
    //    return userMessage;
};

module.exports = ResponseBuild;

// add loadconversation to a diferent function.
function loadconversationfiles() {
    var fs = require('fs');
    var ChatbotDataset_data = JSON.parse(fs.readFileSync('./controller/data/english/json/upsy_corpus.json'));

    // market elements are returning an error...
    // datavector = [];
    datavector = ["ai", "botprofile", "computers", "conversations", "emotion", "food", "gossip", "greetings", "health", "history", "humor", "literature", "money", "movies", "politics", "psychology", "science", "sports", "trivia"];

    var mergefile = [];
    // for (var j = 0; j < datavector.length; j++) {
    for (var j = 0; j < datavector.length; j++) {
        mergefile[j] = JSON.parse(fs.readFileSync('./controller/data/english/json/' + datavector[j] + '.json'));
        for (var i = 0; i < mergefile[j].conversations.length; i++) {
            ChatbotDataset_data.conversations.push(mergefile[j].conversations[i]);
        }
    }

    // console.log(ChatbotDataset);
    return ChatbotDataset_data;
}