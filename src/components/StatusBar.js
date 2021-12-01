import React from "react";
import { formatNumber } from './util/utilFunctions';

const StatusBar = ({countnft}) => {
    return (
        <div className="position-fixed" style={{ zIndex: 1060, background: "black", width: "100%", display: "flex", justifyContent: "center", height: "30px"}}>
            <p><strong>{countnft}</strong> NTFS Minted <span className="ms-3"><strong>{formatNumber(10000 - countnft)}</strong> NFTs available</span></p>
        </div>
    );
}

export default StatusBar;