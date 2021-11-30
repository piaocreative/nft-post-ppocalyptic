
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
            <h3 className="text-center text-white mb-4">Get my Mint Ticket</h3>
            <p className="text-center text-white">Dropspace will be selling 500 mint tickets to our OG community. Holding a ticket will grant you early access to future top-tier drops. </p>
            <p className="text-center text-white">Tickets will be sold incrementally, with drops being announced on our <a href="#" className="text-white text-decoration-underline">Discord</a>. They'll also be available in the secondary market on <a href="#" className="text-white text-decoration-underline">Opensea</a>. Mint Ticket holders are part of a lifelong membership that includes exclusive access to future pre-sales of top-tier projects. In other words, the tickets are never burnt and can be reused for all projects that have a pre-sale.</p>
            <div className="d-flex gap-4 mt-5 justify-content-center">
                <h4 className="text-white align-self-center">0.05 ETH</h4>
                <div className="d-flex gap-3">
                    <button onClick={ setDown } className="fs-4">-</button>
                    <input type="number" className="text-center" value={ item } />
                    <button onClick={ setUp } className="fs-4">+</button>
                </div>
                <button className="rounded-pull" onClick={onMintPressed} >Mint Now</button>
            </div>
        </div>
    )
}

export default Ticket;