import _ from "lodash";
import { toast } from "react-toastify";
import Axios from "axios";
import { ethers } from 'ethers';
import { Web3Provider } from "ethers/providers";


export const notify = (msg: string, success?: boolean) => {
  !success ? toast(msg) : toast.success(msg, { autoClose: false });
};


export const notifyError = (msg: string) => {
  toast.error(msg, { autoClose: false });
};


export const notifyWarn = (msg: string) => {
  if (!toast.isActive("nfId")) {
    toast.warn(msg, { toastId: "nfId" });
  }
};

/*
  direct return
*/
export const rpcStatus = async():Promise<boolean> => {
  try{
    const result = await Axios.get('/api/v1/projects');
    return true;
  }catch (error){
    console.error("Could not connect to server on rpc check");
    return false;
  }
}



export const ethBalance = async(ethersProvider: Web3Provider): Promise<string> => {
  let balance = await ethersProvider.getBalance('kodeart.eth');
  return await ethers.utils.formatEther(balance);
}



