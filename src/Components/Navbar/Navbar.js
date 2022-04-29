import React, { useState } from "react";
import Navigation from "../Link/link";
import SideBar from "../Sideabar/Sidebar";
import styled from "styled-components";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  const Nav = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--color1);
    box-shadow: 2px 2px 15px rgba(63, 63, 63, 0.493);
    z-index: 100;
    min-height: 85px;

    & .right {
      display: flex;
      position: relative;
      align-items: center;
      margin-right: 50px;

      & a {
        position: relative;
        text-align: center;
        display: inline-block;
        min-width: 120px;
        font-weight: 600;
        transition: all 0.3s linear;
        color: var(--color5);
      }

      & a:hover {
        color: var(--color4);
        transition: all 0.3s linear;
      }
    }

    & .left a {
      font-size: 24px;
      font-weight: 600;
      padding-left: 20px;
      font-family: "RocknRoll One", sans-serif;
      color: var(--color5);
    }

    & .left i {
      font-size: 24px;
      font-weight: 600;
      color: var(--color4);
    }

    & .toggle {
      position: absolute;
      right: 15px;
      background-color: var(--color4);
      padding: 10px 12px;
      border-radius: 5px;
      display: none;
      cursor: pointer;
      transition: all 0.3s linear;
      border: 1px solid transparent;

      &:hover {
        background: transparent;
        transition: all 0.3s linear;
        border: 1px solid var(--color4);
      }

      & i {
        font-size: 22px;
        color: var(--color5);
      }
    }

    @media screen and (max-width: 600px) {
      & .right {
        display: none;
      }

      & {
        padding: 25px 0;
      }

      & .toggle {
        display: block;
      }

      & .right a {
        padding: 25px 0;
      }
    }
  `;

  return (
    <>
      <Nav>
        <div className={"left"}>
          <Navigation path="/" name="Blog." className={"logo"} />
          <i className="fas fa-fire"></i>
        </div>

        <div className={"right"}>
          <Navigation path="/" name="Home" />
          <Navigation path="services" name="services" />
          <Navigation path="contact" name="Contact Me" />
        </div>

        <div className={"toggle"} onClick={clickHandler}>
          <i className="fas fa-bars"></i>
        </div>
      </Nav>
      <SideBar toggle={toggle} setToggle={setToggle} />
    </>
  );
};

export default Navbar;
