import React from "react";
import Avatar from "./EmpleadoAvatar";
import Row from "./Row";

function List({empleados}){
    return(
        <div className="list">
            {empleados.map((empleado)=>(
                <div className="empleado-item" key={empleado.id}>
                    <Avatar pic={empleado.pic} fullName={empleado.fullName}></Avatar>
                    <Row fullName={empleado.fullName} title={empleado.title} departament={empleado.departament}></Row>
                </div>
            ))}
        </div>
    )
}

export default List;