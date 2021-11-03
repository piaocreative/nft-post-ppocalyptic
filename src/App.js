import React from "react";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import { Readmap } from "./components/Readmap";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Light from "./components/Light";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './App.scss';

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">

        <Header />

        <Banner />

        <Products />

        <div className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 position-relative">
                <h2 className="text-white title">1914 translation by H. Rackham</h2>
                <div className="col-lg-10">
                  <h5 className="text-white mb-4">Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>
                  <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstance</p>
                </div>
                <div className="about-bg">
                  <img src="./about-bg.png" />
                </div>
              </div>
              <div className="col-lg-6">
                  <div className="position-relative">
                    <img src="./about.png" />
                    <Light
                      url="./lights/light4.png"
                      left="auto"
                      top={-300}
                      right={-300}
                      bottom="auto"
                      index={-1}
                    />
                  </div>
                  <div className="col-lg-7 offset-lg-2">
                    <h5 className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h5>
                  </div>
              </div>
            </div>
          </div>

          <Light
            url="./lights/light5.png"
            left={100}
            top="auto"
            right="auto"
            bottom={-800}
            index={-1}
          />
        </div>

        <Readmap />

        <Teams />

        <div className="community bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h2 className="text-black mb-5">Join the community</h2>
                <p className="text-dark">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                <div className="text-center text-lg-start">
                  <button>Join our Discord</button>
                </div>
              </div>
              <div className="col-lg-7">
                <img src="./community.png" />
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </Web3ReactProvider>
  );
}

export default App;
