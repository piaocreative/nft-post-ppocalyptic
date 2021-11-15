import React, {useRef, useEffect} from 'react';
import TimelineObserver from "./timeline/index";


const Timeline = ({ setObserver, callback }) => {
  
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const timeline4 = useRef(null);
    const timeline5 = useRef(null);
    const timeline6 = useRef(null);
    const square1 = useRef(null);
    const square2 = useRef(null);
    const square3 = useRef(null);
    const square4 = useRef(null);
    const square5 = useRef(null);
    const square6 = useRef(null);
    const square7 = useRef(null);
  
    useEffect(() => {
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(timeline4.current);
      setObserver(timeline5.current);
      setObserver(timeline6.current);
      setObserver(square1.current);
      setObserver(square2.current);
      setObserver(square3.current);
      setObserver(square4.current);
      setObserver(square5.current);
      setObserver(square6.current);
      setObserver(square7.current);
    }, []);
  
    return (
      <div className="wrapper">
        <div className="squareWrapper">
            <div id="square1" ref={square1} className="square"></div>
        </div>

        <div id="timeline1" ref={timeline1} className="timeline" />

        <div className="squareWrapper">
          <div id="square2" ref={square2} className="square"></div>
        </div>
        <div id="timeline2" ref={timeline2} className="timeline" />

        <div className="squareWrapper">
          <div id="square3" ref={square3} className="square"></div>
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />

        <div className="squareWrapper">
          <div id="square4" ref={square4} className="square"></div>
        </div>
        <div id="timeline4" ref={timeline4} className="timeline" />

        <div className="squareWrapper">
          <div id="square5" ref={square5} className="square"></div>
        </div>
        <div id="timeline5" ref={timeline5} className="timeline" />

        <div className="squareWrapper">
          <div id="square6" ref={square6} className="square"></div>
        </div>
        <div id="timeline6" ref={timeline6} className="timeline" />

        <div className="squareWrapper">
          <div id="square7" ref={square7} className="square"></div>
        </div>

      </div>
    );
  };
  

export const Readmap = () => {
    return (
        <div id="roadmap" className="container">
            <div className="row">   
                <div className="col-lg-6">
                    <h2 className="text-white mb-4">Roadmap</h2>
                </div>
                <div className="col-lg-7">
                    <p className="mt-3">We have a lot of ideas that make the customer the hero of our story. We love solving problems and exceeding your expectations. We will work hard with our community to make Discord and Twitter even cooler throughout time.</p>
                </div>
            </div>

            <div className="position-relative">

                <div className="story">
                    <p className="number mb-3">01</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Community Wallet</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">When our collection is sold out, we will create and start the community wallet with 10 ETH. This wallet will be used for further donations, investments and promotions as voted on by the community. We will also reward our most active and helpful community members based on our discord ranking system.</p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">02</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Golems <br />Merch</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0"
                                >Ellis and his Bounty Hunters begin their journey and pass through the Zone of Desolation, which is populated by the Golems, a tribe with 2000 Armored Warriors. Ellis and his Bounty Hunters are confronted by a group of Golem Armored Warriors and a standoff ensues.
                                We have special Golems Merch reserved for 20 lucky wallet owners. When 2000 NFTs are sold out, we will share 10% of mint sales to 20 lucky wallet owners.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">03</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Kesseks <br />Merch</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">
                                Some of the Bounty Hunters stay in Anatef while Ellis and the others go on a reconnaissance mission to spy on the protected base of the Kesseks and their 3000 Armored Warriors. The Bounty Hunters destroy one of the Kesseks' ammunition dumps and are chased.
                                We have special Kesseks Merch reserved for 30 lucky wallet owners. When new 3000 NFTs are sold out, we will share 15% of mint sales to 30 lucky wallet owners.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">04</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Mondrils <br />Merch</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">
                                Ellis wakes up in the Blue Quadrant base of the Mondrils, another tribe with 5000 Armored Warriors led by none other than Gilhem. Gilhem had received knowledge of Ellis' bounty hunter gang from Andres—to help them capture Ellis for leverage against the Kesseks.
                                We have special Mondrils Merch reserved for 50 lucky wallet owners. When new 5000 NFTs are sold out, we will share 20% of mint sales to 50 lucky wallet owners.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">05</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>9 Hunter's <br />Drop</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">
                                There are special NFT products with portraits of 9 Hunters. When our collection is sold out, we will send them free to best 9 collectors of special Warriors.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">06</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Ellis and <br />Bohler's Drop</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">There are special NFT products with portraits of Ellis and Bohler. When our collection is sold out, we will send Ellis's portrait and 5ETH to the best collector of Hunters. Also, we will send Bohler's portrait and 5ETH to our most active and helpful community member.</p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">07</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Blockchain<br />Game</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">We are planning to publish the blockchain game with  Only NFT owners can join to the game. It will be coming soon…! Enjoy it!</p>
                        </div>
                    </div>
                </div>

                <TimelineObserver
                    initialColor="#282B2F"
                    fillColor="#FEA715"
                    handleObserve={(setObserver) => (
                        <Timeline
                            className="timeline"
                            setObserver={setObserver}
                        />
                    )}
                />

            </div>
        </div>
    );
}