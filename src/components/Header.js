import React from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";

import { useWeb3React } from "@web3-react/core"
import { injected } from "./connectors"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
  
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
                    <div className="navbar-brand d-flex gap-3 align-items-center">
                        <Link to="/">
                            <img src="./logo.png" />
                        </Link>
                        <h4 className="text-white">Saler.</h4>
                    </div>

                    <button className="navbar-toggler btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className="text-white" icon={faBars} />
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navBar">

                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">
                                Gallery
                            </Link>
                            
                            <Link className="nav-link" to="/">
                                Story
                            </Link>

                            <Link className="nav-link" to="/">
                                Roadmap 
                            </Link>

                            <Link className="nav-link" to="/">
                                Team
                            </Link> 
                        </div>

                        {active ? <Link to="/" onClick={disconnect}><h4 className="connectWallet">Disconnect</h4></Link> : <Link to="/" onClick={connect}><h4 className="connectWallet">Wallet Connect</h4></Link>}

                    </div>
                    </nav>
                </div>
            </header>
        </Router>
    );
}

export default Header;