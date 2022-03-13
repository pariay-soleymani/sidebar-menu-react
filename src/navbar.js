import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  margin: 20px 50px;
  z-index: 15px;
  li {
    padding: 18px 30px;
  }
  @media (max-width: 768px) {
    margin: 0;
    flex-direction: column;
    background-color: blue;
    top: 0;
    left: 0;
    transition: all 0.3s linear;
    transform: ${(props) =>
     (props.open ? "translateX(0)" : " translateX(-100%)")};
      opacity:${(props) => (props.open ? '1' : '0')};
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    float: left;
    li {
      color: #fff;
      margin-top:15px;
      font-size:20px;
    }
  }
`;

const Navbar = ({ open }) => {
  return (
    <UL open={open}>
      <li>Home</li>
      <li>Docs</li>
      <li>Service</li>
      <li>AboutUs</li>
      <li>ContactUs</li>
    </UL>
  );
};

export default Navbar;
