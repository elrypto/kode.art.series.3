import React from 'react';
import { Button } from 'antd';
import { Store } from '../../common/Store';
import { notify, ethBalance } from '../../common/Actions';



export default function EnsTest() {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <div>ENS</div>
      <div className="row seeMe"> 
      <Button
        type="dashed"
        onClick={ async() => {
          console.log("ethers provider:", state.ethersProvider);
          let eths = state.ethersProvider;

          let address = await eths.resolveName('kodeart.eth');
          notify('kodeart.eth translated to addr:' + address);

          let converted = await ethBalance(eths, address);
          notify('kodeart.eth balanace:' + converted);

          let reverse = await eths.lookupAddress(address);
          notify('lookup on:' + address + ' returned name:' + reverse);
        }}
      >
        ens - kodeart.eth
      </Button>


      <Button
        type="dashed"
        onClick={ async() => {
            const sd = "testacct";
            const testDomain = `${sd}.kodeart.eth`;
            console.log(`setting subdomain: ${testDomain}`);
            notify(`attempting to register subdomain: ${testDomain}`)
            //console.log('ethers provider:', state.ethersProvider);
            //let ens = new ENS(state.ethersProvider);
            //let provider = new Web3(state.injectedProvider);
            //var ens = new ENS(provider);
            //await ens.setResolver(testDomain, '0xbD9D474cd28285b384D8da460A26D6174c5a8A4D', {from: state.selectedEthAddr});
            //console.log(ens);
            //await ens.setSubnodeOwner('iam.alice.eth', '0x1234...', {from: ...});
          }}
        >
            register subdomain
      </Button>
    </div>
  </React.Fragment>
  )
}
