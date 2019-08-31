var Promise = require("bluebird");
const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1.js");

var AnalyzeMessage = function(userMessage) {
  //This function makes an API call to IBM Watson Natural Language Understanding API
  //The function returns the response from Watson, which is a JSON of the emotional values of the message
  //https://cloud.ibm.com/apidocs/natural-language-understanding?code=node#emotion
  this.emotion = new Promise(function(resolve, reject) {
    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
      version: "2019-07-12"
    });

    const analyzeParams = {
      text: userMessage,
      features: {
        emotion: {}
      }
    };

    naturalLanguageUnderstanding
      .analyze(analyzeParams)
      .then(analysisResults => {
        //console.log(JSON.stringify(analysisResults, null, 2));
        resolve(analysisResults.emotion.document.emotion);
      })
      .catch(err => {
        console.log("error:", err);
        reject(err);
      });
  });
};

module.exports = AnalyzeMessage;
