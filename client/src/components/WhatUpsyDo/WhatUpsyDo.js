import React from "react";
import "../TechUsed/HoverTech.css";

function WhatUpsyDo() {
  return (
    <div className="container">
      <div
        className="col-12"
        style={{
          textAlign: "center",
          paddingTop: "75px",
          paddingBottom: "75px",
          backgroundColor: "white"
        }}
      >
        <div>
          <h1> What can Upsy do?</h1>
        </div>
      </div>

      <div
        className="row"
        style={{
          alignContent: "center",
          verticalAlign: "middle",
          padding: "10px"
        }}
      >
        <div className="col-md-1"></div>
        <div className="col-2" style={{ textAlign: "right" }}>
          <img
            className=""
            src={require("../../assets/images/check/check2.svg")}
            height="50px"
            alt="check"
          />
        </div>
        <div
          className="col-8"
          style={{
            textAlign: "left",
            verticalAlign: "middle",
            fontSize: "25px",
            // float: "left"
          }}
        >
          Upsy can give you an emergency compliment!{" "}
          <span style={{ fontSize: "12px" }}>(we all need that)</span>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div
        className="row"
        style={{
          alignContent: "center",
          verticalAlign: "middle",
          padding: "10px"
        }}
      >
        <div className="col-md-1"></div>
        <div className="col-2" style={{ textAlign: "right" }}>
          <img
            className=""
            src={require("../../assets/images/check/check4.svg")}
            height="50px"
            alt="check"
          />
        </div>
        <div
          className="col-8"
          style={{
            textAlign: "left",
            verticalAlign: "middle",
            fontSize: "25px",
            // float: "left"
          }}
        >
          Upsy can help you throw away big stressful thoughts!
        </div>
        <div className="col-md-1"></div>
      </div>

      <div
        className="row"
        style={{
          alignContent: "center",
          verticalAlign: "middle",
          padding: "10px"
        }}
      >
        <div className="col-md-1"></div>
        <div className="col-2" style={{ textAlign: "right" }}>
          <img
            className=""
            src={require("../../assets/images/check/check5.svg")}
            height="50px"
            alt="check"
          />
        </div>
        <div
          className="col-8"
          style={{
            textAlign: "left",
            verticalAlign: "middle",
            fontSize: "25px",
            // float: "left"
          }}
        >
          Upsy can measure your anxiety and depression level!
        </div>
        <div className="col-md-1"></div>
      </div>

      <div
        className="row"
        style={{
          alignContent: "center",
          verticalAlign: "middle",
          padding: "10px"
        }}
      >
        <div className="col-md-1"></div>
        <div className="col-2" style={{ textAlign: "right" }}>
          <img
            className=""
            src={require("../../assets/images/check/check3.svg")}
            height="50px"
            alt="check"
          />
        </div>
        <div
          className="col-8"
          style={{
            textAlign: "left",
            verticalAlign: "middle",
            fontSize: "25px",
            // float: "left"
          }}
        >
          Upsy can talk to you!{" "}
          <span style={{ fontSize: "12px" }}>
            (I'm still learning how to chat - it's really really hard!)
          </span>
        </div>
        <div className="col-md-1"></div>
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
          src={require("../../assets/images/upsy_friend.svg")}
          width="90%"
          alt="check"
        />
      </div>
    </div>
  );
}

export default WhatUpsyDo;
