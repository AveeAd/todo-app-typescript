import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import styled from '@emotion/styled';
import { useState } from "react";

const Todos:{id:number,text:string,completed:boolean}[] = [
  {
    id: 1,
    text: "Learn React",
    completed: true
  },
  {
    id: 2,
    text: "Learn Redux",
    completed: true
  },
  {
    id: 3,
    text: "Learn Mobx",
    completed: false
  },
  {
    id: 4,
    text: "Learn Vue",
    completed: false
  },
  {
    id: 5,
    text: "Learn Angular",
    completed: false
  }
]

function App() {

  const [allTodos,setAllTodos] = useState([...Todos]);
  const [activeTodos,setActiveTodos] = useState(Todos.filter(todo=>!todo.completed));
  const [completedTodos,setCompletedTodos] = useState(Todos.filter(todo=>todo.completed));
  const [filter,setFilter] = useState("all");
  const addTodo = (text:string) => {
    setAllTodos(prev=>[...prev,{id:Math.floor(Math.random()*100),text,completed:false}])
  }

  return (
    <Container>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={filter==="all"?allTodos:(filter==="active"?activeTodos:completedTodos)} />
      <Filter setFilter={setFilter} />
    </Container>
  );
}

export default App;

const Container = styled.div`
background-color: #fff;
width:30%;
`
