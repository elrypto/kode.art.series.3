import React from 'react'
import { Button } from 'antd';
import useInjectedWeb3 from '../components/hooks/useInjectedWeb3';
import { Store } from '../common/Store';
import { notify } from '../common/Actions';
import useLoadInjectedEthersState from '../components/hooks/useLoadInjectedEthersState';
import { ethers } from 'ethers';


const someTopSpace = {
  marginTop: '2em'
}

export default function Test() {
  const { state, dispatch } = React.useContext(Store);
  useInjectedWeb3();
  useLoadInjectedEthersState();
  

  console.log("config from state", state.loomConnectionInfo);
  
  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            <div className="heading-underline"></div>
           

            <div>Ethereum</div>
            <div className="row seeMe"> 
              <div className="col-md-8">
                Address
              </div>
              <div className="col-md-4">
                Balance
              </div>
            </div>
            <div className="row seeMe"> 
              <div className="col-md-8">
                {state.selectedEthAddr}
              </div>
              <div className="col-md-4">
                 b
              </div>
            </div>


            <div>Loom</div>
            <div className="row seeMe"> 
             <Button
              type="dashed"
              onClick={ async() => {
                console.log("ethers provider:", state.ethersProvider);
                let eths = state.ethersProvider;

                let address = await eths.resolveName('kodeart.eth');
                notify('kodeart.eth translated to addr:' + address);

                let balance = await eths.getBalance('kodeart.eth');
                let converted = await ethers.utils.formatEther(balance);

                notify('kodeart.eth balanace:' + converted);

              }}
             >
               translate kodeart.eth
             </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
