// Copied over the previous ResponseBuild file and adjusted to only support the Compliments 
// for the ComplimentsChat component in the app

var jarodistance = require('jaro-winkler');
var mongoose = require("mongoose");
var fs = require('fs');

var db = require("../models");
var database_name = "upself_PROD";
mongoose.connect("mongodb+srv://dbaccess:dbaccess_password@upself-database-ruumc.mongodb.net/"+database_name+"?retryWrites=true&w=majority", { useNewUrlParser: true });


var ResponseBuildCompliments = function (userMessage) {
    var databaseresults = {};
    var ChatbotDataset = loadconversationfiles();
    var usermsg = userMessage;
    var score = [];
    var indexscore = [];
    var sendtodatabase = false;

    // thse are all responses that upsy has:
    console.log("ChatbotDataset size: " + ChatbotDataset.conversations.length);

    // get all scores + select select +0.95 responses
    for (var i = 0; i < ChatbotDataset.conversations.length; i++) {
        
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

        // sendtodatabase = true;      // EB -- commenting this out on the ComplimentsChat page (limiting the responses that Upsy makes)
        databaseresults.message = userMessage;
        databaseresults.score = max_score;
    }


    // randomize response
    var randomItem = indexscore[Math.floor(Math.random() * indexscore.length)];
    if (randomItem < 0 || randomItem == undefined) {
        randomItem = 0;
    }

    databaseresults.response = ChatbotDataset.conversations[randomItem].response;
    
    // if (sendtodatabase == true) {    // EB -- The sendtodatabase value is staying as false here
    //     db.CorpusTraining.create(databaseresults)
    //         .then(function (dbCorpusTraining) {
    //             // View the added result in the console
    //             console.log("dbCorpusTraining: " + dbCorpusTraining);
    //         })
    //         .catch(function (err) {
    //             // If an error occurred, log it
    //             console.log("ERROR dbCorpusTraining: " + err);
    //         });
    // }


    return ChatbotDataset.conversations[randomItem].response;

};

module.exports = ResponseBuildCompliments;

// add loadconversation to a diferent function.
function loadconversationfiles() {
    var fs = require('fs');
    var ChatbotDataset_data = JSON.parse(fs.readFileSync('./controller/data/english/json/upsy_compliments.json'));

    // datavector = ["upsy_compliments"]; //  EB -- this datavector is being referenced in the ChatbotDataset_data, so it's not needed here

    // var mergefile = [];

    // for (var j = 0; j < datavector.length; j++) {
    //     mergefile[j] = JSON.parse(fs.readFileSync('./controller/data/english/json/' + datavector[j] + '.json'));
    //     for (var i = 0; i < mergefile[j].conversations.length; i++) {
    //         ChatbotDataset_data.conversations.push(mergefile[j].conversations[i]);
    //     }
    // }

    return ChatbotDataset_data;
}