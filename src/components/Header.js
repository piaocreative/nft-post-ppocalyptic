import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import StatusBar from "./StatusBar";

import { connectWallet, getCurrentWalletConnected } from "./util/interact.js";  

const Header = () => {

    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
                setWallet(accounts[0]);
                setStatus("👆🏽 Write a message in the text-field above.");
            } else {
                setWallet("");
                setStatus("🦊 Connect to Metamask using the top right button.");
            }
            });
        } else {
            setStatus(
            <p>
                {" "}
                🦊{" "}
                <a href={`https://metamask.io/download.html`} rel="noreferrer" target="_blank">
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
                </a>
            </p>
            );
        }
    }

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };  
    
    useEffect(() => {
        async function fetchCurrentWatlletConnected() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);
            addWalletListener();
        }
        fetchCurrentWatlletConnected();
    }, [])

    return(
        <Router>
            <StatusBar status={status} />
            
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-brand">
                            <Link to="/">
                                <img src="./logo.png" alt="Logo"/>
                            </Link>
                        </div>

                        <button className="navbar-toggler btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon className="text-white" icon={faBars} />
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navBar">

                            <div className="navbar-nav">
                                <Link to="gallery" spy={true} smooth={true} className="nav-link">
                                    Gallery
                                </Link>
                                
                                <Link to="story" spy={true} smooth={true} className="nav-link">
                                    Story
                                </Link>

                                <Link to="roadmap"  spy={true} smooth={true} className="nav-link">
                                    Roadmap 
                                </Link>

                                <Link to="team" spy={true} smooth={true} className="nav-link">
                                    Team
                                </Link> 

                            </div>

                            <button id="walletButton" onClick={connectWalletPressed}>
                                {walletAddress.length > 0 ? (
                                "Connected: " +
                                String(walletAddress).substring(0, 6) +
                                "..." +
                                String(walletAddress).substring(38)
                                ) : (
                                <span>Connect Wallet</span>
                                )}
                            </button>

                        </div>
                    </nav>
                </div>
            </header>
        </Router>
    );
}

export default Header;