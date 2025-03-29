import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState([{
    title:"gym jaoo",
    description:"leg day",
    completed:false
  },
{
  title:"dsa croww",
    description:"linked list",
    completed:true
}])

function addToDo() {
  setCount([...count, {
    title:"new todo",
    description:"new description"
  }])
}
  return (
    <>
    {/* <Todo title={count[0].title} description={count[0].description}></Todo>
    <Todo title={count[1].title} description={count[1].description}></Todo> */}

    <button onClick={addToDo} >Random to do add crow</button>
    {count.map(function(todo){
      return <Todo title={todo.title} description={todo.description}></Todo>
    })}
    </>
  )
}

function Todo(props) {
  return (
    <>
    <h1>{props.title}</h1>
    <h2>
      {props.description}
    </h2>
    </>
  )
}

export default App
