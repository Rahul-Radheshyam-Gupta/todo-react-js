import React from 'react'
import {TodoItem} from './TodoItem';
<style>

</style>
// export const Todos = (props) => {
export const Todos = ({todos,no_of_due_todo,onDelete}) => {
        
    // min height applied in order to keep footer at bottom(just css)
    const todoStyle ={
        minHeight:"40vh",
    }

    return (
        <div className="container my-5 " style={todoStyle}>
            <h3>Todo List</h3><h6 className={no_of_due_todo ? "text-danger counter" : "text-success"}>No. of Due Todos : {no_of_due_todo}</h6> 
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center" >Tasks</th>
                        <th className="text-center"> Due Time </th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>


            {
                todos.length === 0 ?
                     
                     <tr>
                         <td className="text-center"><h5 className="pt-2 text-success">No Todos to Display</h5></td>
                         <td></td>
                         <td></td>
                     </tr>
                    :
                    todos.map(
                            (todo) => {
                                return (<TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />)
                            }
                        )
                    
            }
                </tbody>
            </table>
            

            
        </div>
    )
}
