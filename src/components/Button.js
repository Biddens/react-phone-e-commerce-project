import styled from 'styled-components'

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: var(--mainWhite);
  border: 0.05rem solid var(--mainWhite);
  border-color: ${props =>
    props.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
  color: var(--mainBrown);
  color: ${props => (props.cart ? "var(--mainWhite)" : "var(--mainBrown)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainBrown);
    background: ${props =>
      props.cart ? "var(--mainBrown)": "var(--mainBrown)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
