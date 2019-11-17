import React from 'react'
import { Store } from '../../common/Store';


export default function SuperSimpleAcctDisplay() {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <div>Ethereum</div>

      <div className="row seeMe"> 
        <div className="col-md-8">
          {state.ensAddress ? state.ensAddress : state.selectedEthAddr }
        </div>
        <div className="col-md-4">
          {state.ethBalance}
        </div>
      </div>
    </React.Fragment>
  );
}


