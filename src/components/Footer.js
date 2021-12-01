import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {Link} from 'react-scroll'

const Footer = () => {
    return (
        <Router>
            <footer>

                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <div>
                            <ul className="footer-links text-center text-md-start p-0">
                                <li>
                                    <Link to="gallery" spy={true} smooth={true}> 
                                        Gallery
                                    </Link>    
                                </li>  
                                <li>
                                    <Link to="story" spy={true} smooth={true}> 
                                        Story
                                    </Link>    
                                </li> 
                                <li>
                                    <Link to="roadmap" spy={true} smooth={true}> 
                                        Roadmap
                                    </Link>    
                                </li> 
                                <li>
                                    <Link to="team" spy={true} smooth={true}> 
                                        Team
                                    </Link>    
                                </li>   
                            </ul>          
                        </div>

                        <div className="navbar-brand mb-0 text-center">
                            <Link to="/">
                                <img src="./logo.png" alt="Post-Apocalyptic" />
                            </Link>
                            <p className="py-3 mb-0">Copyright 2021. The Post-Apocalyptic.</p>
                        </div>

                        <div className="text-center text-lg-end">
                        
                            <a href="https://opensea.io/collection/post-apocalyptic-v4" rel="noreferrer" target="_blank"><h6 className="mb-3">SEE ON OPENSEA</h6></a>
                            

                            <ul className="social d-flex gap-4 mb-4 justify-content-center justify-content-md-end p-0">
                                <li>
                                    <a href="https://twitter.com/pst_apocalypse" rel="noreferrer" target="_blank">
                                        <img src="./twitter.svg" alt="Post-Apocalyptic Twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/tdmnPxAKTJ" rel="noreferrer" target="_blank">
                                        <img src="./discord.svg" alt="Post-Apocalyptic Discord" />
                                    </a>
                                </li>
                            </ul>                            

                        </div>
                        
                    </div>

                </div>

            </footer>
        </Router>
    );
}

export default Footer;