import React from 'react'
import MMLogo from './../img/metamask.png';
import PortisLogo from './../img/portislogo.svg';
import PortisConnect from '../components/PortisConnect';


export default function GettingStarted() {

  //hook here, wait for provider portis

  //hook defensive check for metamask/portis providers

  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">

            <div>We did not detect a metamask account or a portis connection</div>

            <div id="gettingStartedText" className="seeMe">
              <div id="gettingStartedTitle">
                Lets Get Started
              </div>
              <div id="getttingStartedTextExplainer">
                In order to use the kode.art application you need to have an address on the Ethereum blockchain. You can install and
                use any of the supported options below.
              </div>
            </div>

            <div id="gettingStartedContainer" className="seeMe">
                <div className="row"> 
                  <div className="col-md-6">Portis - Recommended for Beginners</div>
                  <div className="col-md-6">MetaMask - Experienced Users</div>
                </div>
                 
                <div className="row"> 
                   <div className="col-md-6">
                    <div>
                      <img className="thirdPartyLogo portisLogo" src={PortisLogo} alt="portis logo" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div>
                      <img className="thirdPartyLogo" src={MMLogo} alt="metamask logo" />
                    </div>
                  </div>
                </div>

                <div className="row"> 
                  <div className="col-md-6"><PortisConnect /></div>
                  <div className="col-md-6"></div>
                </div>

                <div className="row"> 
                  <div className="col-md-6">Create a username and password with Portis and login through their platform.</div>
                  <div className="col-md-6">Install the MetaMask browser extension</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/*
https://www.portis.io/

https://metamask.io/

*/