import React, { useState } from "react";
import Navbar from "./navbar";
import styled from "styled-components";

const DIV = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  top: 40px;
  left: 40px;
  position: fixed;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color:${(props)=> (props.open ? "#fff" : "blue")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Hambergur = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevOpen) => (prevOpen = !prevOpen));
  };

  return (
    <> 
    <Navbar open={open}/>
      <DIV open={open} onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </DIV>
     
    </>
  );
};

export default Hambergur;
