import React from 'react';
import { Store, ActionType } from '../../common/Store';
import { ethers } from 'ethers';
import { dispatchEthRelated, dispatchProviderAndAddr } from '../../common/Actions';



export default function useLoadInjectedEthersState() {
  const { state, dispatch } = React.useContext(Store);

  /*React.useEffect(() => {
    if (state.injectedProvider){
      console.log('state', state);
      if (state.injectedProvider.selectedAddress){

        dispatch({
          type: ActionType.SET_SELECTED_ETH_ADDR,
          payload: state.injectedProvider.selectedAddress
        });

      }else{
        console.warn('dont have selected address, yet or using portis');
      }
    }
  }, [state.injectedProvider]);



  React.useEffect(() => {
    const fetchBalance = async() => {
      if (state.injectedProvider){
        let provider = new ethers.providers.Web3Provider(state.injectedProvider);
        let balance = await provider.getBalance(state.selectedEthAddr);
        let converted = await ethers.utils.formatEther(balance);
        let reverse = await provider.lookupAddress(state.selectedEthAddr);
        console.log("provider hook returned balanace, ens address:", balance, reverse);

        dispatchEthRelated(provider, converted, reverse, dispatch);

      }
    }

    if (state.selectedEthAddr){
      fetchBalance();
    }
  }, [state.selectedEthAddr])
*/

  //provider,address
  React.useEffect(() => {
    const fetchProviderAndAddress = async() => {
      const provider = new ethers.providers.Web3Provider(state.injectedProvider);
      let accounts = await provider.listAccounts();
      let selectedAddr = accounts[0];
      dispatchProviderAndAddr(provider, selectedAddr, dispatch);
    }

    if (state.injectedProvider){
      fetchProviderAndAddress();
    }
  }, [state.injectedProvider]);


  //address - everthing else
  React.useEffect(() => {
    const fetchEthRelated = async() => {
      let balance = await state.ethersProvider.getBalance(state.selectedEthAddr);
      let converted = await ethers.utils.formatEther(balance);
      let reverse = await state.ethersProvider.lookupAddress(state.selectedEthAddr);

      dispatchEthRelated(converted, reverse, dispatch);
    }

    if (state.injectedProvider){
      fetchEthRelated();
    }
  }, [state.selectedEthAddr]);


}



