import React, { useReducer, useRef, useState, useEffect } from "react";
import FormContext from "../FormContext"
import "./style.css";

function Form(props) {
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
                onChange={handleInputChange}
            />
            <input className="role-input"
                name="role"
                type="text"
                placeholder="Role"
                ref={inputRef}
                value={employees.name} 
                onChange={handleInputChange}
            />
            <input className="image-input"
                name="image"
                type="url"
                placeholder="Github User"
                ref={inputRef}
                value={employees.name} 
                onChange={handleInputChange}
            />
            <br></br>
            <button onClick={handleInputChange}>Submit</button>
    </form>
    </div>
</div>
   )
    }

export default Form
