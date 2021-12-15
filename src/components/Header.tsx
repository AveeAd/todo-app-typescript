import styled from '@emotion/styled'
const Header = () => {
  return (
    <StyledHeader>
      <h3>Todo List</h3>
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.header`
background-color: #eee;
padding:0.5rem 1rem;
padding-top:1rem;
`
