import axios from "axios";

export default {
  getMessageAnalysis: function(message) {
    console.log("making axios req");
    return axios
      .post("/api/AnalyzeMessage", {
        params: { userMessage: message }
      })
      .then(
        response => {
          console.log(response.data);
        },
        error => {
          console.log(error);
        }
      );
  }
};
