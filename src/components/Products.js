import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router,  Link } from "react-router-dom";

const Products = () => {
    let settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
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
                        <img src="./products/product1.png" />
                    </Link>
                </div>

            </Slider >
        </Router>
    );
}

export default Products;