import React from 'react';
import './assets/css/App.css';

function App() {
  return (

    <main className="container">

      <div className="col-12" style={{ textAlign: "center" }}>

        <div>
          <img src={require('./assets/images/logo_upself.svg')} width="350" alt="logo" />
        </div>

        <div>
          Hey I'm Upsy! I'm here the make your day better!
        </div>

      </div>




      <div className="col-12" style={{ textAlign: "center" }}>
        <div style={{ border: "200px"}} >
          <img id="applink" style={{ opacity: 1, margin: "5px" }} src={require('./assets/images/app_store_badge.png')} height="40" alt="appstore" />
          <img id="applink" style={{ opacity: 1, margin: "5px" }} src={require('./assets/images/google_play_badge.png')} height="40" alt="googleplay" />
        </div>
      </div>




    </main>





  );
}

export default App;
