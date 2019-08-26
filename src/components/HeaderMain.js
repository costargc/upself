import React from 'react';
import '../assets/css/App.css';
import '../assets/css/Bounce_upsy.css';

function header() {
  return (


    <div className="col-12" style={{
      textAlign: "center",
      paddingTop: "75px",
      paddingBottom: "75px",
      backgroundColor: "#f2f2f2"
    }}>

      <div>
        <img src={require('../assets/images/logo_upself.svg')} width="350" alt="logo" />
      </div>

      <div>
        <h1> Hey I'm Upsy! </h1>
        <h4>  I'm here the make your day better! </h4>
      </div>

      <div className="stage">
        <div className="box bounce-7">
          <img src={require('../assets/images/upsy_emo/upsy1_emo3.svg')} width="200" alt="logo" />
        </div>
      </div>

      <div className="col-12" style={{ textAlign: "center", paddingTop: "30px" }}>
        <div style={{ border: "200px" }} >
          <img id="applink" style={{ opacity: 1, margin: "5px" }} src={require('../assets/images/app_store_badge.png')} height="40" alt="appstore" />
          <img id="applink" style={{ opacity: 1, margin: "5px" }} src={require('../assets/images/google_play_badge.png')} height="40" alt="googleplay" />
        </div>
      </div>

    </div>



  );
}

export default header;
