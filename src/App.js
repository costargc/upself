import React from 'react';
import './assets/css/App.css';

function App() {
  return (

    <main className="container">

      <div className="col-12" style={{ textAlign: "center" }}>

        <div>
          <img src={require('./assets/images/logo_upself.svg')} height="250" alt="logo" />
        </div>

        <div>
          Everybody could use someone like me
        </div>

      </div>

      <div className="col-12" style={{ textAlign: "center" }}>
        <img id="applink" style={{ opacity: 1 }} src={require('./assets/images/app_store_badge.png')} height="50" alt="appstore" />
        <img id="applink" style={{ opacity: 1 }} src={require('./assets/images/google_play_badge.png')} height="50" alt="googleplay" />
      </div>

    </main>





  );
}

export default App;
