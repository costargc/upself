let AnalyzeMessage = require("../controller/AnalyzeMessage.js");

const router = require("express").Router();

// Post route for receiving user's message and returning IBM Watson's Analysis
router.post("/analyzeMessage", function(req, res) {
  console.log(req.body.params);

  AnalyzeMessage = new AnalyzeMessage(req.body.params.userMessage).emotion.then(
    function(result) {
      console.log(result);
      res.json(result).catch(err => res.status(422).json(err));
    }
  );
});

module.exports = router;
