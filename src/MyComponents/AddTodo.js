import React from 'react'
import PropTypes from 'prop-types'
import { useState } from "react";
function AddTodo({addTodo}) {
    // Note AddTodo -> react component where addTodo -> add todo function


    // here we defined states of title and desc
    // update states when the change event triggered
    const[title,setTitle] = useState("")
    const[desc,setDesc] = useState("")
    const[dueTime,setDueTime] = useState("00:00")

    // function bind with submit event of below form
    // onSubmit - call submit function
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("title and desc can not be blank");
        }
        if (title && desc){
            addTodo(title,desc,dueTime);

            // reset the form
            setTitle("");
            setDesc("");
            setDueTime("00:00");
        }
    }

    // style can be apply using the variable 
    const addTodoStyle = {
        width: "70vw",
        marginTop:"3%"
    }


    return (
        <div className="container" style={addTodoStyle}>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label forhtml="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" placeholder="write title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label forhtml="desc" className="form-label">Todo Description</label>
                    <input type="text" placeholder="write description" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label forhtml="dueTime" className="form-label">Due Time</label>
                    <input type="time" placeholder="write time" className="form-control" value={dueTime} id="dueTime" onChange={(e)=>{setDueTime(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}

AddTodo.propTypes = {

}

export default AddTodo

