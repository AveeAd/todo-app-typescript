import styled from '@emotion/styled'
const AddTodo = (props:any) => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    props.addTodo(e.target.todo.value);
    e.target.todo.value='';
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name='todo' placeholder='Enter Todo' />
      <Button>Add</Button>
    </Form>
  )
}

export default AddTodo

const Form = styled.form`
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
padding:0.5rem 1rem;
`

const Input = styled.input`
padding:0.5rem;
border:2px solid #ccc;
border-radius:0.5rem 0 0 0.5rem;
border-right:none;
width: 100%;
&::placeholder {
  color:#999;
}
&:focus {
  outline:none;
  border: 2px solid steelblue;
}
`

const Button = styled.button`
padding:0.5rem;
border:2px solid steelblue;
border-radius:0 0.5rem 0.5rem 0;
background-color:steelblue;
color:#fff;
`
