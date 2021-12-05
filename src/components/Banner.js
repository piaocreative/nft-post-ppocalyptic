import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { format } from 'date-fns';
import { formatNumber } from './util/utilFunctions';

const Banner = (props) => {
    let date = format(new Date(), 'yyyy-MM-dd');
    
    return(
        <div className="banner" style={{ backgroundImage: `url(./homebanner.png)` }}>
            <div className="container position-relative">
                <h3 className="text-white text-xl-end sub-title">Welcome to the</h3>
                <h1 className="title text-xl-end">Post-Apocalyptic</h1>
            </div>

            <div className="divide"></div>

            <div className="container position-relative">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="ntf-info">
                            <h2 className="text-white"> {date} </h2>
                            <p className="fs-4"><strong>{props.count}</strong> NTFs Minted <span className="ms-3"><strong>{formatNumber(10000 - props.count, 0, 3)}</strong> NFTs available</span></p>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1">
                        <p style={{ marginBottom: 95 }}>The Post-Apocalyptic world has been divided into different quadrants where 10,000 Armored Warriors battle each other for survival. Each Post-Apocalyptic NFT is a unique ERC-721 digital collectible living on the Ethereum blockchain.</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <a href="https://opensea.io/collection/post-apocalyptic-v4" className="btn" rel="noreferrer" target="_blank">Buy on Opnesea</a>
                            <ul className="social-link d-flex gap-5 mb-0 justify-content-start">
                                <Router>
                                    <li>
                                        <a href="https://twitter.com/pst_apocalypse" className="social-item" rel="noreferrer" target="_blank">
                                            <img src="./twitter.svg" alt="Post-Apocalyptic Twitter" />
                                            <span className="d-none d-md-inline-block">Twitter</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://discord.gg/uybmKaAae2" className="social-item" rel="noreferrer" target="_blank">
                                            <img src="./discord.svg" alt="Post-Apocalyptic Discord" />
                                            <span className="d-none d-md-inline-block">Discord</span>
                                        </a>
                                    </li>
                                </Router>
                             </ul>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Banner;