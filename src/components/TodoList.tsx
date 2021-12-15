import styled from "@emotion/styled"
import Todo from './Todo'
const TodoList = (props:any) => {
  return (
    <List>
      {
        props.todos.map((todo:{id:number,text:string,completed:boolean})=>(<Todo key={todo.id} todo={todo}/>))
      }
      
    </List>
  )
}

export default TodoList

const List = styled.div`
padding:0.5rem 1rem;
`
