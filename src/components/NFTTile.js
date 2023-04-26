import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  NFTMarketplaceABI,
  NFTMarketplaceAddress,
} from "../contexts/constants";

function NFTTile(data) {
  const [currAddress, updateAddress] = useState("0x");
  const [message, updateMessage] = useState("");

  console.log(data);

  async function checkOwnership() {
    const ethers = require("ethers");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    updateAddress(addr);
  }
  async function executePurchase(e, tokenId) {
    e.preventDefault();
    console.log(data.data.price);
    try {
      const ethers = require("ethers");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        NFTMarketplaceAddress,
        NFTMarketplaceABI,
        signer
      );
      console.log(data.data.price);
      const salePrice = ethers.utils.parseUnits(data.data.price, "ether");
      updateMessage("Buying the NFT... Please Wait (Upto 5 mins)");
      //run the executeSale function
      let transaction = await contract.executeSale(tokenId, {
        value: salePrice,
      });
      await transaction.wait();

      alert("You successfully bought the NFT!");
      updateMessage("");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    checkOwnership();
  }, [currAddress]);
  return (
    <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl">
      <img
        src={data.data.image}
        alt=""
        className="w-72 h-80 rounded-lg object-cover"
      />
      <div className="text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
        <strong className="text-xl">{data.data.name}</strong>
        <p className="display-inline">{data.data.description}</p>
      </div>
      {currAddress == data.data.seller ? (
        <div className="text-white">You are the owner of this NFT</div>
      ) : (
        <button
          className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
          onClick={(e) => executePurchase(e, data.data.tokenId)}
        >
          Buy this NFT
        </button>
      )}
    </div>
  );
}

export default NFTTile;
