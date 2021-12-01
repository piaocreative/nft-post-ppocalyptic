import React from "react";

const Light = ({url, left, top, right, bottom, index}) => {
    return (
        <div className="position-absolute" style={{ left:left, top:top, right:right, bottom:bottom, zIndex:index }}>
            <img src={url} alt="Post-Apocalyptic" />
        </div>
    );
}

export default Light;