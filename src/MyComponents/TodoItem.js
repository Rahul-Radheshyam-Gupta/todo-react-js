import React from 'react'

// export const TodoItem = (props) => {
export const TodoItem = ({todo,onDelete}) => {
    const tdStyle = {
        width:"100%"
    }
    let today = new Date();
    let current_time = today.getHours()+":"+today.getMinutes();
    console.log("current time ",current_time)
    return (


        <tr  className={todo.time <= current_time & todo.time !=="00:00" ? "text-danger" : ""  } >
            <td className="text-center">
                <h5 style={tdStyle}> {todo.title} </h5>
                <p>
                {todo.desc}
                </p>
            </td>
            <td className="text-center">
                { todo.time === "00:00" ? "" : todo.time }
            </td>

            <td className="text-center">
                <span className="badge rounded-pill" onClick={()=>{onDelete(todo)}}>
                    
                    {/* if directly pass onDelete with todo it will just call function while rendering not onClick
                    but we want it to be called when click event is fired so for that we need to pass a function as attr */}
                    {/* <p> {props.todo.title} &nbsp; {props.todo.desc} </p> */}

                    <button className="btn btn-sm btn-danger" type="button" > Delete </button>
                </span>

            </td>
        </tr>

    )
}

