import React, { useReducer, useRef, useState, useEffect } from "react";
import FormContext from "../FormContext"
import "./style.css";

function Form(props) {
    const inputRef = useRef();
    const [formToggle, setFormToggle] = useState(false);
    //const [employees, setEmployees] = useState([]);
    const [employees, dispatch] = useReducer((state, action) => {
        switch (action.type) {
        case "add":
        return [
            ...state,
            {
                id: state.length * Math.random(),
                name: action.name,
                role: action.role,
                image: action.image
            }
            ];
        case "remove":
            return state.filter((_, index) => {
            return index !== action.index;
            });
        default:
            return state;
        }
    }, [])

  const handleInputChange = e => {
    e.preventDefault();
    dispatch({
        type: "add",
        name: inputRef.current.value,
    })
    }

   const handleToggle = e => {
    e.preventDefault();
        let formGroup = document.querySelector(".form-group")
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
        <form className="form" onSubmit={handleInputChange}>
            <input
                name="name"
                type="text"
                placeholder="Name"
            />
            <input
                name="role"
                type="text"
                placeholder="Role"
            />
            <input
                name="image"
                type="url"
                placeholder="Github User"
            />
            <br></br>
            <button onClick={handleInputChange}>Submit</button>
    </form>
    </div>
</div>
    )
}

export default Form
