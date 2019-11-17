import React from 'react'
import Portis from '@portis/web3';
import { Button } from 'antd';
import { ethers } from 'ethers';



export default function PortisTest() {
  return (
    <div>
      <div>Portis</div>
      
      <Button
        type="dashed"
        onClick={ async() => {
          console.log('portis connection test');
          let KEY_FROM_CONFIG = '';
          if (process.env.REACT_APP_PORTIS_KEY){
            KEY_FROM_CONFIG = process.env.REACT_APP_PORTIS_KEY;
          }
          console.log("key from config:", process.env.REACT_APP_PORTIS_KEY);
          const portis = new Portis(KEY_FROM_CONFIG, 'mainnet');
          //const web3 = new Web3(portis.provider);
          const ethersPortis = new ethers.providers.Web3Provider(portis.provider);
          const portisAddr = await ethersPortis.listAccounts();
          console.log("portis addr:", portisAddr);
        }}
      >
        connect to Portis
      </Button>

    </div>
  )
}


