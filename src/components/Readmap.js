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
        <div className="container">
            <div className="row">   
                <div className="col-lg-6">
                    <h2 className="text-white">Roadmap</h2>
                </div>
                <div className="col-lg-5 offset-lg-1">
                    <p className="mt-3">We have a lot of ideas that make the customer the hero of our story. We love solving problems and exceeding your expectations. We will work hard with our community to make Discord and Twitter even cooler throughout time.</p>
                </div>
            </div>

            <div className="position-relative">

                <div className="story">
                    <p className="number mb-3">01</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>What is Lorem Ipsum?</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">02</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Where does it come from?</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">03</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Why do we <br />use it?</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">04</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Where can I get some?</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.  </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">05</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>What is Lorem Ipsum?</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">06</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Where does it come from?</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <p className="number mb-3">07</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Why do we <br />use it?</h2>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <p className="mt-3 mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
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