import React, { useState,useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
import './App.css'


const App = () => {
  const[advice,setAdvice] = useState("")
useEffect(()=>{
  fetchAdvice();
},[])

  function fetchAdvice(){
    axios.get("https://api.adviceslip.com/advice")
    .then((data)=>{
      //console.log(data);
      setAdvice(data.data.slip.advice)
    })
   .catch((err)=>{
      console.log(err);
    })
  }
  console.log(advice);
  return (
    <div className='App'>
      <Card advice={advice} fetchAdvice={fetchAdvice}/>
      
    </div>
  )
}

export default App
