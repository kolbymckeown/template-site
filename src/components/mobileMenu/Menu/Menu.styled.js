import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  margin-top: 100px;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 75%;
  }

  a {
    /* font-size: 2rem; */
    text-transform: uppercase;
  display: ${({ open }) => (open ? "unset" : "none")};

    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    position: absolute;
    top: 115px;
    :first-child {
      top: 185px;
    }

    :nth-child(2) {
      top: 255px;
    }

    :nth-child(3) {
      top: 325px;
    }
  }
    /* @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    } */

    &:hover {
      color: red;
    }
  
`;
