import React, {useEffect, useState} from "react";
import LoadingScreen from 'react-loading-screen';

import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import { Readmap } from "./components/Readmap";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Light from "./components/Light";
import Ticket from "./components/Ticket"

import { getMintedTotal } from "./components/util/interact.js"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.scss';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  const [image, setImage] = useState("./story/story1.jpg");

  const [count, setCount] = useState(0);  

  const images = [
    "./story/story1.jpg",
    "./story/story2.jpg",
    "./story/story3.jpg",
    "./story/story4.jpg",
    "./story/story5.jpg",
    "./story/story6.jpg",
    "./story/story7.jpg",
    "./story/story8.jpg",
    "./story/story9.jpg",
    "./story/story10.jpg",
    "./story/story11.jpg",
  ];

  let random;
  let imageNum;
  
  function changeImage () {
    random = Math.random();
    imageNum = parseInt(random*11);

    if(image===images[imageNum]) {
      changeImage();
    } else {
      setImage(images[imageNum]);
    }
  }

  function handleChangeCount (count) {
    setCount(count);
  }

  useEffect(() => {
    async function fetchCount() {
      const count = await getMintedTotal();
      setCount(count);
    }
    fetchCount();
  
    const interval = setInterval(() => {
      changeImage()
    }, 500);
    
    window.addEventListener('load', () => {
      setIsLoaded(true);
    })

    return () => clearInterval(interval);
  });

  return (
    <div>
      {
        isLoaded? 
        <div className="App">

          <Header />

          <Banner count={count} />

          <Products />

          <div id="story" className="about-section">
            <div className="container">
              <h2 className="text-white title">The Post-Apocalyptic</h2>
              <div className="row">
                <div className="col-lg-6 position-relative">
                  <div className="col-lg-10">
                    <p>The Post-Apocalyptic
                      The future: maybe a long time off, maybe sooner than you think. The landscape of this arid post-apocalyptic world has been divided into different quadrants where 10,000 Armored Warriors battle each other for survival. Within these 10,000 Armored Warriors, there are a limited number of military personnel trying to maintain order against different organized factions who are fighting each other—and anyone who stands in their way—for supplies, for territory, and just for kicks. These factions include the Kesseks, the Mondrils, and the Golems. (Oh, and did we mention the atomic-mutated dragons who can strike without warning? Because that’s what you also have in a post-apocalyptic world.) In the middle of all this: Ellis Ulton, a battle-scarred Bounty Hunter who is just trying to make a living as he navigates between the military personnel he once belonged to and the Kesseks, the Mondrils, and the Golems who really call the shots now. Ellis is reluctantly hired for a job which will force him to come up against the dreaded Kesseks, the most vicious faction within the 10,000 Armored Warriors. So he brings together his own team of nine Bounty Hunters: some veterans, some total newbies. Along the way to the quadrant where the Kesseks operate, Ellis encounters his old friend Andres, now the head of military personnel, whose loyalties are only swayed by money. Ellis also takes Bohler, a young, brash female-wannabe Bounty Hunter, under his wing while he and his team of nine Bounty Hunters have to figure out ways to battle the Kesseks, the Mondrils, and the Golems, and deal with the always-changing shifts of power in this dangerous universe.</p>
                  </div>
                  <div className="about-bg">
                    <img src="./about-bg.png" alt="About Post-Apocalyptic" />
                  </div>
                </div>
                <div className="col-lg-6">
                    <div className="position-relative">

                      {/* <img src={ image } className="w-100" /> */}

                      <Ticket count={count} handleChangeCount={handleChangeCount} />

                      <Light
                        url="./lights/light4.png"
                        left="auto"
                        top={-300}
                        right={-300}
                        bottom="auto"
                        index={-1}
                      />
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
                  <p className="text-dark">The Post-Apocalyptic world has been divided into different quadrants where 10,000 Armored Warriors battle each other for survival. Each Post-Apocalyptic NFT is a unique ERC-721 digital collectible living on the Ethereum blockchain.</p>
                  <div className="text-center text-lg-start">
                    <a href="https://discord.gg/tdmnPxAKTJ" rel="noreferrer" target="_blank" className="btn">Join our Discord</a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <img src="./community1.png" alt="Post-Apocalyptic Community" />
                </div>
              </div>
            </div>
          </div>
          
          <Footer />

        </div>
      :<LoadingScreen
        loading={true}
        bgColor='#1b1d54'
        spinnerColor='#ff8b14'
        textColor='#ffffff'
        logoSrc='/logo.png'
      > Post Apocalyptic</LoadingScreen>
      }

    </div>
  );
}

export default App;
