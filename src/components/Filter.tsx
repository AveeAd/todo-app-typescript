import styled from "@emotion/styled"
const Filter = (props:any) => {
  const filterHandler = (e:any) => {
    switch(e.target.innerText) {
      case "All":
        props.setFilter("all");
        break;
      case "Active":
        props.setFilter("active");
        break;
      case "Completed":
        props.setFilter("completed");
        break;
      default:
        props.setFilter("all");
        break;
    }
  }
  return (
    <Container>
      <span>Show:</span>
      <Button onClick={filterHandler}>All</Button>
      <Button onClick={filterHandler}>Active</Button>
      <Button onClick={filterHandler}>Completed</Button>
      
    </Container>
  )
}

export default Filter;

const Container = styled.div`
  background-color: #eee;
  padding: 0.5rem 1rem;
  padding-bottom:1rem;
`

const Button = styled.button`
  margin:0 0.2rem;
  padding:0.2rem;
  background-color: #fff;
  border:2px solid #ccc;
  border-radius:5px;
`
