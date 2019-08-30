let AnalyzeMessage = require("./controller/AnalyzeMessage");

module.exports = function(app) {
  // Post route for receiving user's message and returning IBM Watson's Analysis
  app.post("/api/watsonResponse", function(req, res) {
    var AnalyzeMessage = new AnalyzeMessage(req.body.userMessage);
    AnalyzeMessage.emotion.then(function(result) {
      res.json(result);
    });
  });
};
