import React from "react";

function Avatar({pic}) {
    return (
        <div className="avatar">
            <img src={pic}/>
        </div>
    )
}

export default Avatar;