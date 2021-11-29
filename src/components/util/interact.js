require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;  
const contractABI = require("../../PostApocalypticItem.json");
const contractAddress = "0xa562B9674CdbF550d974B27A4BF474848d55C712";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3('https://eth-rinkeby.alchemyapi.io/v2/'+{alchemyKey});

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

async function loadContract() {
  return new web3.eth.Contract(JSON.parse(contractABI), contractAddress, 
    {
      gasPrice: 500000,
      gasLimit: "1000000"
    }
  );
}

export const mintNFT = async (NUM_ITEMS) => {

  const nftContract = window.contract = await new web3.eth.Contract(contractABI.abi, contractAddress,
    {
      gasPrice: 500000,
      gasLimit: "1000000"
    }  
  );

  for (var i = 1; i <= NUM_ITEMS; i++) {
    const result = await nftContract.methods
      .mintItem(window.ethereum.selectedAddress, `https://post-apocalyptic-api.herokuapp.com/api/token/${i}`)
      .send({ from: window.ethereum.selectedAddress }).then(console.log('minted')).catch(error => console.log(error));

      if(result) {
        console.log("Minted Item. Transaction: " + result.transactionHash);
      }
  }
};
