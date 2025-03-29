import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    function submitfn() {
        

        fetch("http://localhost:3000/todo", 
            {
                method : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    title : title,
                    description : description
                })
            }
        )
        .then (async (res) =>{
            alert("todo addded");
        })
    }
    
    return (
        <div>
            <input style={{
                padding: 10,
                margin: 10
    }} 
        type="text" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }} placeholder="title"></input>
    <br/>
    <input style={{
            padding: 10,
            margin: 10
        }} 
        type="text" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }} placeholder="description"></input>
    <br/>   
    <button onClick={submitfn}>Add a todo</button>
        </div>
    )
}