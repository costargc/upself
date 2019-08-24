import React from 'react';
import './assets/css/App.css';

function App() {
  return (

    <main className="page js-page">

      <img src={require('./assets/images/logo_upself.svg')} height="250" alt="logo"/>

      <div>
        Everybody could use someone like me
      </div>


      <img id="applink" style={{ opacity: 1 }} src={require('./assets/images/app_store_badge.png')} height="50" alt="appstore"/>
      <img id="applink" style={{ opacity: 1 }} src={require('./assets/images/google_play_badge.png')} height="50" alt="googleplay"/>


    </main>





  );
}

export default App;
