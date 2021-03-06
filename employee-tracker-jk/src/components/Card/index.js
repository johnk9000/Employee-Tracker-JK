import React, { useReducer, useRef, useState, useEffect } from "react";
import "./style.css";
import FormContext from "../FormContext"

function Card(props) {
    const inputRef = useRef();
    const [personIn, setPersonIn] = useState("")
    const [roleIn, setRoleIn] = useState("")
    const [gitIn, setGitIn] = useState("")
    const [formToggle, setFormToggle] = useState(false);
    const founders = [
      {
        id: 1,
        name: "Eric",
        person: "Eric",
        role: "Instructor",
        image: "https://images.squarespace-cdn.com/content/v1/54b1df70e4b089270ed14cb5/1585071880672-6D753V75KMMBD8EWBFK5/ke17ZwdGBToddI8pDm48kPmAnfhQvqhMptgWHhbKoyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxHmI13PUQExzHe63IkveXOojHqdB-MF5SqgJGovDTk0l_7uBv7xs1F-MHtfbN3UJ8/generic-placeholder-person.png",
        git: "ThunderDucky"
      },
      {
        id: 2,
        name: "Kate",
        person: "Kate",
        role: "CEO of all sharks",
        image: "https://cdn5.vectorstock.com/i/1000x1000/56/04/great-white-shark-black-concept-icon-great-vector-23245604.jpg",
        git: null
      },
      {
        id: 3,
        name: "John",
        person: "John",
        role: "janitor",
        image: "https://www.iconspng.com/clipart/musical-dna-grayscale/musical-dna-grayscale.svg",
        git: "johnk9000"
      }
    ]
        //const [employees, setEmployees] = useState([]);
    const [employees, dispatch] = useReducer((state, action) => { 
        switch (action.type) {
        case 'add':
            let personIn = document.querySelector(".name-input")
            let roleIn = document.querySelector(".role-input")
            let gitIn = document.querySelector(".git-input")
              return [
                  ...state,
            {
                id: Math.random(),
                name: action.name,
                person: personIn.value,
                role: roleIn.value,
                git: gitIn.value
            }
              ]
        case "remove":
          console.log("to be fixed")
        default:
            return state;
            }
    }, [])

  const handleInputChange = e => {
    e.preventDefault();
    console.log(gitIn.value)
    dispatch({
        type: 'add',
        index: inputRef.current.value,
      });
      inputRef.current.value = '';
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

const gitUrl = "https://github.com/"

  return (
<div className="container">
    <div className="card-collection">
      {founders.map(homie => (
        <div className="card" key={homie.id} >
            <div className={homie.name}>
              <img src={homie.image}/>
            </div>
            <div className="content">
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Name:</strong> {homie.person} 
                    </li>
                    <li className="list-group-item" key={homie.id}>
                      <strong>Role:</strong> {homie.role}
                    </li>
                    <li className="list-group-item" key={homie.id}>
                        <strong>GitHub:</strong> <a href={homie.git}> {homie.git} </a>
                    </li>
                </ul>
            </div>
      </div>
      ))}
        {employees.map( homie => (
        <div className="card">
            <div className="img-container">
              <img src="https://images.squarespace-cdn.com/content/v1/54b1df70e4b089270ed14cb5/1585071880672-6D753V75KMMBD8EWBFK5/ke17ZwdGBToddI8pDm48kPmAnfhQvqhMptgWHhbKoyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxHmI13PUQExzHe63IkveXOojHqdB-MF5SqgJGovDTk0l_7uBv7xs1F-MHtfbN3UJ8/generic-placeholder-person.png"/>
            </div>
            <div className="content">
                <ul className="list-group">
                    <li className="list-group-item" key={homie.id}>
                        <strong>Name:</strong> {homie.person} 
                    </li>
                    <li className="list-group-item" key={homie.id}>
                      <strong>Role:</strong> {homie.role}
                    </li>
                    <li className="list-group-item" key={homie.id}>
                        <strong>GitHub:</strong> <a href={homie.git}> {homie.git} </a>
                    </li>
                </ul>
            </div>
      </div>
      ))}
    </div>
    <div className="form-cont">     
    <div>
        <button className="toggle" onClick={handleToggle}> ADD EMPLOYEE </button>
    </div>
    <div className="form-group hide">
        <form className="form">
            <input className="name-input"
                name="person"
                type="text"
                placeholder="Name"
                //ref={inputRef}

            />
            <input className="role-input"
                name="role"
                type="text"
                placeholder="Role"
                //ref={inputRef}

            />
            <input className="git-input"
                name="git"
                type="text"
                placeholder="Github Username"
                //ref={inputRef}
            />
            <br></br>
            <button onClick={handleInputChange} ref={inputRef}>Submit</button>
    </form>
    </div>
</div>
</div>
  );
}

export default Card