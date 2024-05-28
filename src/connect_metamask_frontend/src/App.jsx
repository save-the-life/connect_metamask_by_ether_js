import React, { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [userAddress, setUserAddress] = useState("");

  //Connect Metamask by clicking button
  const connectMetamask = async () => {
    //Check if metamask extention exsits
    if (window.ethereum) {
      console.log("detected,,");

      try{
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setUserAddress(accounts);
      } catch(erro){
        console.log("Error connecting,,,");
      }
    } else {
      console.error('Metamask is not installed. Please install it to use this feature.');
    }
  };


  // Connect wallet to interact with smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined'){
      await connectMetamask();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider);
      //use this provider for smart contract intercations
    }
  }

  return (
    <main>
      <div>
        <h1>Metamask Connection</h1>
        <button onClick={connectMetamask}>
          {userAddress ? `Connected: ${userAddress}` : 'Connect Metamask'}
        </button>
      </div>
    </main>
  );
}

export default App;
