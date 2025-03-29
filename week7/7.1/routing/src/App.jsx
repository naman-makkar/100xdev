import React, { useContext } from 'react';
import {lazy} from 'react';
import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { CountContext } from './context';
const Landing = lazy(()=> import('./components/Landing'))
const Dashboard = lazy(()=> import('./components/Dashboard'))


function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Count />
    </CountContext.Provider>
  );
}
  
//old app component codee routing
  // return (
  //   <>
  //   <BrowserRouter>
  //   <DisplayButton/>
  //   <Routes>
  //     <Route path='/dashboard' element = {<Dashboard/>} ></Route>
  //     <Route path='/' element = {<Landing />}></Route>
  //   </Routes>
  //   </BrowserRouter>
  //   </>
  // )


function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const {count} = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count +1)
    }}>Increase</button>

<button onClick={() => {
    setCount(count -1)
  }}>Decrease</button>
  </div>

  
}

// function DisplayButton() {
//   const navigate = useNavigate();
//   return <>
  
//   <button onClick={()=> {
//     navigate("/");
//   }}>Landing Page</button>

// <button onClick={()=> {
//     navigate("/dashboard");
//   }}>Dashboard Page</button>
//   </>
// }

export default App
