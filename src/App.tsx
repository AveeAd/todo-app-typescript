import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import styled from '@emotion/styled';
import { useState } from "react";
import { randomUUID } from "crypto";

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

  const [todos,setTodos] = useState([...Todos]);

  const addTodo = (text:string) => {
    setTodos(prev=>[...prev,{id:Math.floor(Math.random()*100),text,completed:false}])
  }

  return (
    <Container>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
      <Filter />
    </Container>
  );
}

export default App;

const Container = styled.div`
background-color: #fff;
width:30%;
`
