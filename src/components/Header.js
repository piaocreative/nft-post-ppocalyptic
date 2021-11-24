import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {Link} from 'react-scroll'

import { useWeb3React } from "@web3-react/core"
import { injected } from "./connectors"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const { active, activate, deactivate } = useWeb3React();

    async function connect() {
      try {
        await activate(injected)
      } catch (ex) {
        console.log(ex)
      }
    }
  
    async function disconnect() {
      try {
        deactivate();
      } catch (ex) {
        console.log(ex)
      }
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

                        {active ? <a href="#" onClick={disconnect}><h4 className="connectWallet">Disconnect</h4></a> : <a href="#" onClick={connect}><h4 className="connectWallet">Wallet Connect</h4></a>}

                    </div>
                    </nav>
                </div>
            </header>
        </Router>
    );
}

export default Header;