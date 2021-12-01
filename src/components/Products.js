import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router } from "react-router-dom";

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

    const products = [
        './products/product1.png',
        './products/product2.png',
        './products/product3.png',
        './products/product4.png',
        './products/product5.png',
        './products/product6.png',
        './products/product7.png',
        './products/product8.png',
        './products/product9.png',
        './products/product10.png',
        './products/product11.png',
        './products/product12.png',
        './products/product13.png',
        './products/product14.png',
    ];

    return(
        <div id="gallery">
            <Router>
                <Slider {...settings}>

                    {products.map((src, index) => (
                        <div key={index} className="product">
                            <img src={ src } className="w-100" alt="Post-Apocalyptic Products" />
                        </div>
                    ))}

                </Slider >
            </Router>
        </div>
    );
}

export default Products;