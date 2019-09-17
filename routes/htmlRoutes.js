// let AnalyzeMessage = require("../controller/AnalyzeMessage.js");
// let ResponseBuild = require("../controller/ResponseBuild.js");
// var ChatbotDataset = JSON.parse(fs.readFileSync('./controller/data/english/trivia.json'));


const router = require("express").Router();
const path = require("path");

// Post route for receiving user's message and returning IBM Watson's Analysis
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/","index.html"));
});

router.get("/swag", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/","swag.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
