import React from 'react';
import { BrowserRouter as Router,  Link } from "react-router-dom";
import Light from "./Light";

const Banner = () => {
    return(
        <div className="banner">
            <div className="container position-relative">
                <h3 className="text-white text-lg-end sub-title">Welcome to the</h3>
                <h1 className="title">Finibus-Bonorum</h1>

                <div className="row">
                    <div className="col-lg-6 offset-lg-3 offset-xxl-6">
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
                <div className="banner-thumbnail">
                    <img src="./banner.png" />
                </div>
            </div>

            <Light
                url="./lights/light1.png"
                left="auto"
                right={-15}
                top={-160}
                bottom="auto"
                index={-1}
            />

            <Light
                url="./lights/light2.png"
                left={5}
                right="auto"
                top={-145}
                bottom="auto"
                index={-10}
            />

            <Light
                url="./lights/light3.png"
                left={-30}
                right="auto"
                top="auto"
                bottom={-885}
                index={-1}
            />
        </div>
    );
}

export default Banner;