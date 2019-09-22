// let AnalyzeMessage = require("../controller/AnalyzeMessage.js");
let ResponseBuild = require("../controller/ResponseBuild.js");
let ResponseBuildCompliments = require("../controller/ResponseBuildCompliments.js");
// var ChatbotDataset = JSON.parse(fs.readFileSync('./controller/data/english/trivia.json'));

const router = require("express").Router();

// Post route for receiving user's message and returning IBM Watson's Analysis



// router.post("/analyzeMessage", function (req, res) {
//   console.log(req.body.params);

//   new AnalyzeMessage(req.body.params.userMessage).emotion.then(function (
//     result
//   ) {
//     console.log("Emotion results: ", result);
//     res.json(result);
//   });
// });


router.post("/jaroMessage", function (req, res) {

  console.log("Inbound: " + req.body.params.userMessage);

  result = ResponseBuild(req.body.params.userMessage);
  console.log("Text results: ", result);
  res.json(result);

});

// Copied the original API route and adjusted to only handle Compliments
router.post("/jaroCompliment", function (req, res) {

  console.log("Inbound: " + req.body.params.userMessage);

  result = ResponseBuildCompliments(req.body.params.userMessage);
  console.log("Text results: ", result);
  res.json(result);

});

module.exports = router;
