import React, { useReducer, useRef, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Wrapper from './components/Wrapper'
import Form from './components/Form'
import FormContext from './components/FormContext'

function App() {
  return (
    <Wrapper>
      <Header/>
      <Card/>
    </Wrapper>
  )
}

export default App;