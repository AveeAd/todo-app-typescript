import styled from "@emotion/styled"
const Filter = () => {
  return (
    <Container>
      <span>Show:</span>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
      
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
