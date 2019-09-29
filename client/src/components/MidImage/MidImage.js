import React from "react";
// import "./MidImage.css";

function MidImage() {
  return (
    <div className="container">
      <div
        className="col-12"
        style={{
          textAlign: "center",
          // paddingTop: "75px",
          // paddingBottom: "75px",
          backgroundColor: "white"
        }}
      >

      </div>

      <div
        className="col-12"
        style={{
          textAlign: "center",
          margin: "auto",
          alignItems: "center",
          padding: "30px 0px 30px 0px"
        }}
      >
        <img
          className=""
          src={require("../../assets/images/upsy_help.svg")}
          width="90%"
          alt="check"
        />
      </div>
    </div>
  );
}

export default MidImage;
