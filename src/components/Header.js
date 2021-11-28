import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useWallet } from 'use-wallet'

const Header = () => {

    const wallet = useWallet();

    function connect() {
        wallet.connect();
        console.log(wallet.status);
        console.log(wallet.account)
    }

    return(
        <Router>
            <header>

                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-brand">
                            <Link to="/">
                                <img src="./logo.png" />
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

                            <div className="flex flex-col items-center justify-center">
                                {wallet.status === 'connected' ? (
                                    <button onClick={() => wallet.reset()}>Connected {wallet.account} </button>
                                ) : (
                                    <button onClick={connect}>Connect Wallet</button>
                                )}
                                {/* {wallet ? <button onClick={disconnect}>connected <span>{wallet.substring(0, 5)+'...'}</span></button> : <button onClick={connect}>Wallet Connect</button> } */}
                            </div>

                        </div>
                    </nav>
                </div>
            </header>
        </Router>
    );
}

export default Header;