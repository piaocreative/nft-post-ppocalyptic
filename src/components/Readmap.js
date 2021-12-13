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
    }, [setObserver]);
  
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
                <div className="col-12">
                    <h2 className="text-white mb-4">Roadmap</h2>
                </div>
            </div>

            <div className="position-relative">

                <div className="story">
                    <p className="number mb-3">01</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Free NFTs Drop</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">We will drop free NFTs and will transfer to 20 first buyers! Get free NFTs without gas!</p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">02</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Community Wallet</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">When the collection is sold out, we will create and start the community wallet with 10 ETH. This wallet will be used for further donations, investments, and promotions as voted on by the community. We will also reward our most active and helpful community members based on our discord ranking system.</p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">03</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Golems <br />Merch</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">
                                We have special Golems Merch reserved for 20 lucky wallet owners. When 2000 NFTs are sold out, will share <strong>10% OF Sales</strong> to 20 lucky wallet owners.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">04</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Kesseks <br />Merch</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">
                                We have special Kesseks Merch reserved for 30 lucky wallet owners. When new 3000 NFTs are sold out, will share <strong>15% OF Sales</strong> to 30 lucky wallet owners.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">05</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Mondrils <br />Merch</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">
                                We have special Mondrils Merch reserved for 50 lucky wallet owners. When new 5000 NFTs are sold out, will share <strong>20% OF Sales</strong> to 50 lucky wallet owners.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">06</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>9 Hunter's <br />Drop</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">
                                There are special NFTs ready with portraits of 9 Hunters. When the collection is sold out, will send them to the best 9 collectors of special Warriors.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">07</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Ellis and <br />Bohler's Drop</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">
                                There are special NFTs ready. When the collection is sold out, will send <strong>Ellis's Portrait</strong> and <strong>5ETH</strong> to the best collector of Hunters. Also, we will send <strong>Bohler's Portrait</strong> and <strong>5ETH</strong> to our most active and helpful community member.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">08</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Blockchain<br />Game</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">
                                We are planning to publish the <strong>Blockchain Game</strong>, that only NFT owners can join. And will create the community for the game and will go with you all.
                            </p>
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