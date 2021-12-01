import React from "react";

const StatusBar = ({status}) => {
    return (
        <div className="statusbar text-center bg-black p-3">
            <div className="container">
                <div className="text-white">{status}</div>
            </div>            
        </div>
    );
}

export default StatusBar;