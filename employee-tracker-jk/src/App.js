import React, { useReducer, useRef, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Wrapper from './components/Wrapper'
import Form from './components/Form'
import FormContext from './components/FormContext'
const employees = [
  {
    id: 1,
    name: "Eric",
    role: "Instructor",
    image: "https://images.squarespace-cdn.com/content/v1/54b1df70e4b089270ed14cb5/1585071880672-6D753V75KMMBD8EWBFK5/ke17ZwdGBToddI8pDm48kPmAnfhQvqhMptgWHhbKoyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxHmI13PUQExzHe63IkveXOojHqdB-MF5SqgJGovDTk0l_7uBv7xs1F-MHtfbN3UJ8/generic-placeholder-person.png"
  },
  {
    id: 2,
    name: "Kate",
    role: "CEO of all sharks",
    image: "https://cdn5.vectorstock.com/i/1000x1000/56/04/great-white-shark-black-concept-icon-great-vector-23245604.jpg"
  },
]

function App() {
  return (
    <Wrapper>
      <Header/>
      <Card employees={employees}/>
      <Form/>
    </Wrapper>
  )
}

export default App;