import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled, { css } from "styled-components";

const Header = () => {
    return (
        <div className="header">
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
    width: 70%;
    max-width: 1000px;
    height: 40px;
    margin: 0px auto;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
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