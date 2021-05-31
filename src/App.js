import './App.css';
import { useState } from "react"
// import all child components from src dir
// such as src/MyComponents/childComponents.js
import Header from "./MyComponents/Header.js";
import AddTodo from "./MyComponents/AddTodo.js";
import {Footer} from "./MyComponents/Footer.js";
import {Todos} from "./MyComponents/Todos.js";
import About from "./MyComponents/About.js";



// install routers
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





// two approaches we can use for creating components // class and Function based  
// we are using function based approach
function App() {
  var initial_todos;
  var no_due_todo;

  if(localStorage.getItem('todos')){
    initial_todos = JSON.parse(localStorage.getItem('todos'));
    no_due_todo = count_due_todos(initial_todos);
  }
  else{
    initial_todos = []
    no_due_todo = 0
  }

  function count_due_todos(list_of_todos){
    let today = new Date();
    let current_time = today.getHours()+":"+today.getMinutes();
    let counter = list_of_todos.filter((t)=>{ return t.time!=="00:00" && t.time <= current_time }).length;
    return counter;
  }
  const [todos,setTodos] = useState(initial_todos);
  
  const [no_of_due_todo,setDueTdo] = useState(no_due_todo);

  // delete todo function -> take todo object and delete it from the list todos
  const onDelete = (todo) => {
    // this will not update doms => change will not be reflected on page
    // this will work if we are using Angular Js
    // let index =  todo_list.indexOf(todo); // find the index of todo
    // todo_list.splice(index,1) // delete one item from given index
    // console.log("remaining todos",todo_list)

    // in React Js we will use hook state's useState to update states todo_list
    // syntax const [state, setState] = useState(initialValue);
    // simply bind setState fn which will update state whenever called

    let remaining_todos = todos.filter((e)=>{ return e!==todo; })
    setTodos(
      // filter function
      remaining_todos
      )

    if(remaining_todos.length===0){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      localStorage.setItem('todos', JSON.stringify(remaining_todos));
    }
    setDueTdo(count_due_todos(remaining_todos));
    console.log("todos after delete and stored in db ",localStorage.getItem('todos'));

}



  // add todo function -> takes two input and add it to the list todos
  const addTodo = (title,desc,dueTime) => {
    console.log("title desc time ",title,desc,dueTime)
    const my_todo = {
      sno:todos.length===0 ? 1 : todos[todos.length-1].sno+1,
      title:title,
      desc:desc,
      time:dueTime
    }
    let final_todos = [...todos,my_todo];
    // this will add my todo to todos
    setTodos(final_todos);
    setDueTdo(count_due_todos(final_todos));
    console.log("todos before add ",todos)
    localStorage.setItem('todos', JSON.stringify(final_todos));
    console.log("todos after add and stored in db ",localStorage.getItem('todos'));
  }

  // the function will return what should be display and can also control the component
  return (
    // this is main html from public dir --> parents of all child components
    // all other components are  added here 
    
    <HashRouter>
      <div>
        <Header title="Smart Todo" searchBar={false} /> 





        <Switch>
          <Route exact path="/" render={
              ()=>{
                return (
                  <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} no_of_due_todo={no_of_due_todo} onDelete={onDelete} />
                  </>
                )
              }
            }>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>
        <Footer />
      </div>
    </HashRouter>

  );
}

export default App; 
