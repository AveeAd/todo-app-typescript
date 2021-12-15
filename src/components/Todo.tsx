import styled from "@emotion/styled"
import { useState } from "react"
const Todo = (props:any) => {
  const [isCompleted,setIsCompleted]=useState(props.todo.completed);
  const handleCheck = () => {
    setIsCompleted(!isCompleted);
  }
  return (
    <Container>
      <div>
        <input type="checkbox" checked={isCompleted} onChange={handleCheck}  />
        <p className={isCompleted?"completed":undefined}>{props.todo.text}</p>
      </div>
      <i className="fa fa-times"></i>
    </Container>
  )
}

export default Todo

const Container = styled.div`
border-top:2px solid #ccc;
padding:0.5rem;
display:flex;
justify-content:space-between;
align-items:center;
& div {
  display:flex;
  align-items:center;
  & p {
    margin-left:0.5rem;
  }
}
`
