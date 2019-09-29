import axios from "axios";

function getMessageAnalysis(message) {
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

function getMessageJaro(message) {
  return axios.post("/api/jaroMessage", {
    params: { userMessage: message }
  }).then(
    response => {
      // console.log(response.data);
      return response.data;
    },
    error => {
      console.log(error);
    }
  );

};

// duplicated the original getMessageJaro just for compliments
function getCompliment(message) {
  return axios.post("/api/jaroCompliment", {
    params: { userMessage: message }
  }).then(
    response => {
      // console.log(response.data);
      return response.data;
    },
    error => {
      console.log(error);
    }
  );

};



export default { getMessageAnalysis, getMessageJaro, getCompliment }