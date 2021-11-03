import React from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>

            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center">
                    <div>
                        <Router>     
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
                        </Router>
                    </div>

                    <h4 className="text-white text-center text-ms-start my-4 my-md-0">Saler.</h4>

                    <div className="text-center text-lg-end">
                        <h6 className="mb-5">SEE ON OPENSEA </h6>

                        <ul className="social d-flex gap-4 mb-4 justify-content-center justify-content-md-end p-0">
                            <Router>
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
                            </Router>
                        </ul>

                        <p className="mb-0">Copyrights</p>

                    </div>
                    
                </div>

            </div>

        </footer>
    );
}

export default Footer;