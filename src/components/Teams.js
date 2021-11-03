import React from 'react';
import Light from "./Light";

const Teams = () => {
    return (
        <div className="teams">
            <div className="container">
                <h2 className="text-white mb-5">Meet the team</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team">
                            <img src="./team/team.png" />
                            <h4 className="text-white"> H. Rackham</h4>
                            <p className="mb-0">Director</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team">
                            <img src="./team/team.png" />
                            <h4 className="text-white"> H. Rackham</h4>
                            <p className="mb-0">Director</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team">
                            <img src="./team/team.png" />
                            <h4 className="text-white"> H. Rackham</h4>
                            <p className="mb-0">Director</p>
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