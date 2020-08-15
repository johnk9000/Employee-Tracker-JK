import React, { useReducer, useRef, useState, useEffect } from "react";
import "./style.css";
import FormContext from "../FormContext"

function Card(props) {
    const inputRef = useRef();
    const [formToggle, setFormToggle] = useState(false);
    //const [employees, setEmployees] = useState([]);
    const [employees, dispatch] = useReducer((state, action) => { 
        switch (action.type) {
        case 'add':
              return [
                  ...state,
            {
                id: Math.random(),
                name: action.name,
                person: "",
                role: "",
                image: "",
            }
              ]
            default:
                return state;
            }
    }, [])

  const handleInputChange = e => {
    e.preventDefault();
    const {name, value } = e.target
    dispatch({
        type: 'add',
        name: inputRef.current.value
      });
      inputRef.current.value = '';
    }


   const handleToggle = e => {
    e.preventDefault();
        let formGroup = document.querySelectorAll(".form-group")
            console.log(formGroup)
        if (formToggle) {
        formGroup.classList.remove("hide")
          setFormToggle(false)
        } else {
            formGroup.classList.add("hide")
          setFormToggle(true)
        }
      } 

  return (
<div className="wrapper">
    <div className="card-collection">
        {employees.map( homie => (
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
    <div className="form-cont">     
    <div>
        <button className="toggle" onClick={handleToggle}> + </button>
    </div>
    <div className="form-group hide">
        <form className="form">
            <input className="name-input"
                name="person"
                type="text"
                placeholder="Name"
                ref={inputRef}
                value={employees.name} 
                onSubmit={handleInputChange}
            />
            <input className="role-input"
                name="role"
                type="text"
                placeholder="Role"
                ref={inputRef}
                value={employees.name} 
                onSubmit={handleInputChange}
            />
            <input className="image-input"
                name="image"
                type="url"
                placeholder="Github User"
                ref={inputRef}
                value={employees.name} 
                onSubmit={handleInputChange}
            />
            <br></br>
            <button onClick={handleInputChange}>Submit</button>
    </form>
    </div>
</div>
</div>
  );
}

export default Card