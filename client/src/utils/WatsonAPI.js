const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1.js");
const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: "2019-07-12",
  iam_apikey: "4qwcu7_ydMn0lH6Sb0lxlLOLMVxc44NK4UNVgjfM6tsV",
  url: "https://gateway.watsonplatform.net/natural-language-understanding/api"
});

const analyzeParams = {
  html:
    "<html><head><title>Fruits</title></head><body><h1>Apples and Oranges</h1><p>I love apples! I don't like oranges.</p></body></html>",
  features: {
    emotion: {
      targets: ["apples", "oranges"]
    }
  }
};

naturalLanguageUnderstanding
  .analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log("error:", err);
  });
