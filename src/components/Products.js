import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router,  Link } from "react-router-dom";

const Products = () => {
    let settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                  infinite: true,
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1 ,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1 ,
                }
            }
          ]
    };

    return(
        <div id="gallery">
            <Router>
                <Slider {...settings}>
                    <div className="product">
                        <Link to="/">
                            <img src="./products/product1.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product2.png" />
                        </Link>
                    </div>

                    <div className="product"> 
                        <Link to="/">
                            <img src="./products/product3.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product4.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product5.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product6.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product7.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product8.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product9.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product10.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product11.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product12.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product13.png" />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            <img src="./products/product14.png" />
                        </Link>
                    </div>

                </Slider >
            </Router>
        </div>
    );
}

export default Products;