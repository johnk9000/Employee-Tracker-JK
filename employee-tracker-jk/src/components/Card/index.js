import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card-collection">
        {props.employees.map(homie => (
        <div className="card">
            <div className="img-container">
              <img src={homie.image}/>
            </div>
            <div className="content">
                <ul className="list-group">
                    <li className="list-group-item" key={homie.id}>
                        <strong>Name:</strong> {homie.name} 
                    </li>
                    <li className="list-group-item" key={homie.id}>
                      <strong>Role:</strong> {homie.role}
                    </li>
                </ul>
            </div>
      </div>
        ))}
    </div>
  );
}

export default Card