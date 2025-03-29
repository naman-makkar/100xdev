import React, { useState } from 'react'
import { useEffect , useMemo } from 'react';
import axios from 'axios';

// function App() {
// const [title, setTitle] = useState("my name is naman");

//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }
//   return (
//     <>
//     <button onClick={updateTitle}>Hit me to update title</button>
//     <Header title ={title}></Header>
//     <Header title ="naman"></Header>
//     </>
//   )

//   const Header = React.memo(function Header({title}) {
//     return <div>
//       {title}
//     </div>
//   })
// }

// function App() {
//   const[todos, setTodos] = useState([{
//     id : 1,
//     title : "gym jao",
//     description : "push day"
//   },{
//     id : 1,
//     title : "gym jao",
//     description : "push day"
//   },{
//     id : 1,
//     title : "gym jao",
//     description : "push day"
//   }]);
//   function addTodo() {
//     setTodos([...todos, {
//       id : 4,
//       title : "new todo",
//       description : "new description"
//     }])
//   }
//   //key added : helps react to maintain changes easily
//   return (
//     <div>
//       <button onClick={addTodo}>Add to do</button>
//       {todos.map((todo)=>{
//         return <Todo key = {todo.id} title={todo.title} description={todo.description}></Todo>
//       })}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }


// wrapper components
// function App() {
//   return <CssWrapper>
//     Hello there!
//   </CssWrapper>
// }

// function CssWrapper({children}) {
//   return <div style={{
//     border : "1px black solid",
//     margin : 10,
//     padding : 10
//   }}> {children}

//   </div>
// }

function App() {
  

  // useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todos")
  //   .then(async (res) => {
  //     const json =await res.json() ;
  //     setTodos(json.todos)
  //   })
  // }, [])
// const[selectId, setselectId] = useState("1");

// function buttonClick(id) {
//   setselectId(id)
// }
//   return  <div>
//   <button onClick={() => { buttonClick(); }}>1</button>
//   <button onClick={() => { buttonClick(2); }}>2</button>
//   <button onClick={() => { buttonClick(3); }}>3</button>
//   <button onClick={() => { buttonClick(4); }}>4</button>
//   <Todo id={selectId} />
// </div>
  
  
// }

// function Todo({id}) {
//   const[todos , setTodos] = useState({});
//   //axios
//   useEffect(() => {
//     axios.get('https://sum-server.100xdevs.com/todos?id=${id}')
//     .then(function(res){
//       setTodos(res.data.todos);
//     })
//   }, [id])

//   return <div>
//     <h1>{todos.title}</h1> <br/>
//     <h5>{todos.description}</h5>
//   </div>
// }


// USE MEMO

const[counter, setCounter] = useState(0);
const[inputValue, setInputValue] = useState(1);

let count = useMemo(() =>{
  let finalcount = 0;
  for(let i=0; i<=inputValue; i++){
    finalcount = finalcount+i;
  }
  return finalcount;
}, [inputValue]);

return <div>
  <input onChange={function(e){
    setInputValue(e.target.value);
  }} placeholder='input any number'></input>

  <h3>Sum from 1 to {inputValue} is {count} </h3>
  <button onClick={function(){
    setCounter(counter+1);
  }}>Counter {counter} </button>
</div>
}

// USE CALL BACK !!!!!
// useCallback - used when the function itself  doesnt changes until dependency changes.
// example - function 1 = a
// function 2= b 
// function 1 == function 2 , result is false. cuz reference equality is different and similarly react thinks that the function is different and therefore again re-renders even though u used useMemo


export default App
