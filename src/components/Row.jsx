import React from "react";

function Row({fullName, title, departament}) {
    return (
        <div className="row">
            <div className="informacion">
                <h3>{fullName}</h3>
                <p>{title}</p>
                <p>{departament}</p>
            </div>
        </div>
    )
}

export default Row;