import React from 'react';
import { BrowserRouter as Router,  Link } from "react-router-dom";
import { format } from 'date-fns';

const Banner = () => {
    let date = format(new Date(), 'yyyy-MM-dd');

    return(
        <div className="banner" style={{ backgroundImage: `url(./homebanner.png)` }}>
            <div className="container position-relative">
                <h3 className="text-white text-lg-end sub-title">Welcome to the</h3>
                <h1 className="title">Post-Apocalyptic</h1>

                <div className="row">
                    <div className="col-lg-5">
                        <div className="ntf-info">
                            <h2 className="text-white"> {date} </h2>
                            <p>0 NTFS Sold <span className="ms-3">10,000 NFTs available</span></p>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <p  style={{ marginBottom: 95 }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                        <div className="d-md-flex align-items-center justify-content-between text-center">
                            <button className="mb-5 mb-md-0">See on opnesea</button>
                             <ul className="social-link d-flex gap-5 mb-0 justify-content-center justify-content-md-start">
                                <Router>
                                    <li>
                                        <Link className="social-item" to="/">
                                            <img src="./twitter.svg" />
                                            Twitter
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="social-item" to="/">
                                            <img src="./discord.svg" />
                                            Discord
                                        </Link>
                                    </li>
                                </Router>
                             </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divide"></div>
        </div>
    );
}

export default Banner;