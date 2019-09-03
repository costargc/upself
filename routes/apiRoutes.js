let AnalyzeMessage = require("../controller/AnalyzeMessage.js");
let JaroWinkler = require('../controller/jaro-winkler');

const router = require("express").Router();

// Post route for receiving user's message and returning IBM Watson's Analysis
router.post("/analyzeMessage", function(req, res) {
  console.log(req.body.params);

  new AnalyzeMessage(req.body.params.userMessage).emotion.then(function(
    result
  ) {
    console.log("Emotion results: ", result);
    res.json(result);
  });
});


module.exports = router;
