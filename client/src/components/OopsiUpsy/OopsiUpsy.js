import React from "react";
import "./OopsiUpsy.css";

function OopsiUpsy() {
  return (


    <div className="container"
      style={{
        textAlign: "center",
        paddingTop: "75px",
        // paddingBottom: "75px",
        height: "70vh",
      }}>

      <div className="row"
        style={{
          textAlign: "center",
          height: "100%",
        }}>
        <div className="col-md-1"></div>

        <div className="col-lg-4"
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            margin: "auto",
          }}>

          <div className="stage">
            {/* <div className="box bounce-7"> */}
            {/* <div className="box"> */}
            <img
              src={require("../../assets/images/upsy_emo/upsy1_emo6.svg")}
              width="300"
              alt="logo"
            />

          </div>

        </div>

        <div className="col-lg-6"
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            margin: "auto",
          }}>


          <div style={{
            textAlign: "center",
            alignContent: "center",
            // width: 350,
          }}>
            <div style={{
              textAlign: "center",
              maxWidth: 400,
              height: "100%",
              justifyContent: "center",
              display: "flex",
              margin: "auto",
            }}>
              <div>
                <h3 style={{ paddingBottom: 15 }}>Don't you cry little Upsy</h3>
                <h5 style={{ paddingBottom: 15 }}>It's just a 404 Error! </h5>
                <p>Sorry, we can't find that page! It might be an old link or maybe it was moved... or Upsy ate it.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="col-md-1"></div>
      </div>


    </div>





  );
}

export default OopsiUpsy;
