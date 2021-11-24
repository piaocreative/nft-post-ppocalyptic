import React from 'react';
import Light from "./Light";

const Teams = () => {
    return (
        <div id="team" className="teams">
            <div className="container">
                <h2 className="text-white mb-5">Meet the team</h2>
                <div className="row">
                    <div className="col-lg">
                        <div className="team">
                            <img src="./team/team.jpg" />
                            <h4 className="text-white"> Kiran N.</h4>
                            <p className="mb-0">Director</p>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="team">
                            <img src="./story/story4.jpg" />
                            <h4 className="text-white"> Imteaz A.</h4>
                            <p className="mb-0">Marketing Manager</p>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="team">
                            <img src="./story/story3.jpg" />
                            <h4 className="text-white">Svetlana G.</h4>
                            <p className="mb-0">Design Team Manager</p>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="team">
                            <img src="./story/story1.jpg" />
                            <h4 className="text-white"> Evgenia O.</h4>
                            <p className="mb-0">Artist</p>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="team">
                            <img src="./story/story2.jpg" />
                            <h4 className="text-white">Nikita K.</h4>
                            <p className="mb-0">Artist</p>
                        </div>
                    </div>
                </div>
            </div>

            <Light
                url="./lights/light6.png"
                left="auto"
                top={-500}
                right={0}
                bottom="auto"
                index={-1}
            />
        </div>
    );
}

export default Teams;