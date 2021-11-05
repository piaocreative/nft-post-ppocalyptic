import React from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";

const Footer = () => {
    return (
        <Router>
            <footer>

                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <div>
                            <ul className="footer-links text-center text-md-start p-0">
                                <li>
                                    <Link to="/"> 
                                        Gallery
                                    </Link>    
                                </li>  
                                <li>
                                    <Link to="/"> 
                                        Story
                                    </Link>    
                                </li> 
                                <li>
                                    <Link to="/"> 
                                        Roadmap
                                    </Link>    
                                </li> 
                                <li>
                                    <Link to="/"> 
                                        Team
                                    </Link>    
                                </li>   
                            </ul>          
                        </div>

                        <div className="navbar-brand d-flex gap-3 align-items-center m-0">
                            <Link to="/">
                                <img src="./logo.png" />
                            </Link>
                            <h4 className="text-white">Saler.</h4>
                        </div>

                        <div className="text-center text-lg-end">
                            <h6 className="mb-5">SEE ON OPENSEA </h6>

                            <ul className="social d-flex gap-4 mb-4 justify-content-center justify-content-md-end p-0">
                                <li>
                                    <Link to="/">
                                        <img src="./twitter.svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <img src="./discord.svg" />
                                    </Link>
                                </li>
                            </ul>

                            <p className="mb-0">Copyrights</p>

                        </div>
                        
                    </div>

                </div>

            </footer>
        </Router>
    );
}

export default Footer;