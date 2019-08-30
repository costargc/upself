import React from "react";
import "./HoverTech.css";

let techlist = [
  {
    atltag: "aws",
    link: "http://aws.com",
    srcImage: require("../../assets/images/tech/tech1.jpg")
  },
  {
    atltag: "ibm watson",
    link: "https://www.ibm.com/watson",
    srcImage: require("../../assets/images/tech/tech2.png")
  },
  {
    atltag: "node js",
    link: "https://nodejs.org",
    srcImage: require("../../assets/images/tech/tech4.png")
  },
  {
    atltag: "mongo DB",
    link: "https://www.mongodb.com/",
    srcImage: require("../../assets/images/tech/tech6.png")
  },
  {
    atltag: "github",
    link: "https://github.com/",
    srcImage: require("../../assets/images/tech/tech8.jpg")
  },
  // { atltag: 'Bootstrap', link: 'https://getbootstrap.com/', srcImage: require('../../assets/images/tech/tech7.png') },
  {
    atltag: "React",
    link: "https://reactjs.org/",
    srcImage: require("../../assets/images/tech/tech10.png")
  },
  {
    atltag: "MySQL",
    link: "https://www.mysql.com/",
    srcImage: require("../../assets/images/tech/tech5.png")
  },
  {
    atltag: "jQuery",
    link: "https://jquery.com/",
    srcImage: require("../../assets/images/tech/tech9.png")
  }
];

function TechUsed() {
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
          <h1> Technology we use</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12" style={{ textAlign: "center", margin: "auto" }}>
          {LoopTech()}
        </div>
      </div>
    </div>
  );
}

function LoopTech() {
  var array = [];
  for (var i = 0; i < techlist.length; i++) {
    array.push(
      <a key={i} href={techlist[i].link}>
        <div style={{ display: "inline-block" }}>
          <img
            className="techUsed"
            src={techlist[i].srcImage}
            height="150px"
            alt={techlist[i].atltag}
          />
        </div>
      </a>
    );
  }

  return array;
}

export default TechUsed;
