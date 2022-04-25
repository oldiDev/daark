import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled, { css } from "styled-components";

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <Link to="/" style={{height:"20px"}}>
                    <img src="/Logo/logo.svg" alt="logo"></img>
                </Link>
                <HeaderContent>
                    <li>
                        <Link to="/contacts" className="tertiaryButtonText">Контакты</Link>
                    </li>
                    <li>
                        <Link to="/calculation" className="tertiaryButtonText">Калькулятор</Link>
                    </li>
                    <li>
                        <Link to="/about" className="tertiaryButtonText">О нас</Link>
                    </li>
                </HeaderContent>
            </HeaderContainer>
            <Outlet />
        </div>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 15%;
    width: 70%;
    height: 40px;
    margin: 0px auto;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`;

const HeaderContent = styled.ul`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;



export default Header