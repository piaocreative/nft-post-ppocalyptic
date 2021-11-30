
import React, { useState } from "react";
import { mintNFT } from "./util/interact.js";  

const Ticket = () => {
    const [item, setItem] = useState(1);

    function setUp() {
        if(item < 20) {
            setItem(item+1);
        }
    }

    function setDown() {
        if(item > 1) {
            setItem(item-1);
        }
    }

    const onMintPressed = async () => {
        await mintNFT(item).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="mint-ticket border border-white mb-5">
            <h3 className="text-center text-white mb-4">Buy Post-Apocalyptic Items</h3>
            <p className="text-center text-white">The Post-Apocalyptic world has been divided into different quadrants where 10,000 Armored Warriors battle each other for survival. Each Post-Apocalyptic NFT is a unique ERC-721 digital collectible living on the Ethereum blockchain.</p>
            <p className="text-center text-white">We have a lot of ideas that make the customer the hero of our story. We love solving problems and exceeding your expectations. We will work hard with our community to make <a href="https://discord.gg/tdmnPxAKTJ" className="text-white text-decoration-underline">Discord</a> and <a href="https://twitter.com/pst_apocalypse" className="text-white text-decoration-underline">Twitter</a> even cooler throughout time.</p>
            <div className="d-flex gap-4 mt-5 justify-content-center">
                <h4 className="text-white align-self-center">0.05 ETH</h4>
                <div className="d-flex gap-3">
                    <button onClick={ setDown } className="fs-4">-</button>
                    <input type="number" className="text-center" value={ item } />
                    <button onClick={ setUp } className="fs-4">+</button>
                </div>
                <button className="rounded-pull" onClick={onMintPressed}>Mint Now</button>
            </div>
        </div>
    )
}

export default Ticket;