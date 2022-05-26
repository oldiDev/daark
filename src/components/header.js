import React, { useState } from "react";
import Radium from 'radium';
import { Link, Outlet } from "react-router-dom";
import styled, { css } from "styled-components";

const Header = () => {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <header className="header">
            <HeaderContainer>
                {/* <HeaderItem /> */}
                <Link to="/" className="mobile-logo" onClick={() => setIsChecked(false)}>
                    <Logo src="/Logo/logo.svg" alt="logo"></Logo>
                </Link>
                {/* <MenuToggle type="checkbox" id="menu-togle" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                <MenuButtonContainer for="menu-togle">
                    <MenuButton></MenuButton>
                </MenuButtonContainer> */}
                <HeaderContent>
                    <li>
                        <Link to="/contacts" className="tertiaryButtonText" onClick={() => setIsChecked(false)}>Контакты</Link>
                    </li>
                    <li>
                        <Link to="/calculation" className="tertiaryButtonText" onClick={() => setIsChecked(false)}>Калькулятор</Link>
                    </li>
                    <li style={{ border: "none" }}>
                        <Link to="/about" className="tertiaryButtonText" onClick={() => setIsChecked(false)}>О нас</Link>
                    </li>
                </HeaderContent>
            </HeaderContainer>
            <Outlet />
        </header>
    )
}


const HeaderContainer = styled.div`
    width: 75%;
    max-width: 1000px;
    height: 40px;
    margin: 0px auto;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    @media screen and (max-width: 767px){
        height: 64px;
        width: 100%;
        justify-content: center;
    }
`;

const HeaderContent = styled.ul`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 767px){
        position: absolute;
        top: 0;
        height: 0;
        width: 100%;
        margin: 64px 0;
        flex-direction: column;
        justify-content: flex-start;
        z-index: 4;
        box-sizing: border-box;
        visibility: hidden;
        background-color: white;
        transition: height 0.6s cubic-bezier(0.32, 0.08, 0.24, 1), padding 0.6s cubic-bezier(0.32, 0.08, 0.24, 1), visibility 0.3s cubic-bezier(0.32, 0.08, 0.24, 1);


        li {
            width: 80%;
            text-align: center;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--MediumGrey);
            margin: 16px 0px;
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
        }

        li a{
            font-size: 35px;
        }
    }
`;

const LogoContainer = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    width: 74px;
    height: 20px;

    @media screen and (max-width: 767px){
        height: 32px;
        width: 112px;
    }
`

const HeaderItem = styled.div`
    display: none;
    width: 64px;
    height: 100%;

    @media screen and (max-width: 767px){
        display: block;
    }
`

const MenuButtonContainer = styled.label`
    display: none;
    height: 100%;
    width: 64px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px){
        display: flex;
    }
`;

const MenuButton = styled.div`
    display: block;
    background-color: black;
    position: absolute;
    height: 2px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;

    &::before, &::after {
        display: block;
        background-color: black;
        position: absolute;
        height: 2px;
        width: 30px;
        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
    }

    &::before{
        content: '';
        margin-top: -8px;
    }

    &::after{
        content: '';
        margin-top: 8px;
    }
`

const MenuToggle = styled.input`
    display: none;

    &:checked + ${MenuButtonContainer} ${MenuButton}{
        background: rgba(255, 255, 255, 0);
    }

    &:checked + ${MenuButtonContainer} ${MenuButton}::before {
        margin-top: 0px;
        transform: rotate(45deg);
    }

    &:checked + ${MenuButtonContainer} ${MenuButton}::after {
        margin-top: 0px;
        transform: rotate(-45deg);
    }

    ~ ${HeaderContent} &{
        height: 0;
        margin: 50px 0;
        padding: 0;
        border: 0;
        opacity: 0%;
    }


    &:checked ~ ${HeaderContent} { 
        width: 100%;
        height: 150vh;
        margin: 64px 0;
        padding: 30em 0;
        /* transition: height 0.4s cubic-bezier(0.32, 0.08, 0.24, 1), padding 0.4s cubic-bezier(0.32, 0.08, 0.24, 1); */
        visibility: visible;
    }

    &:checked ~ ${HeaderContent} li {
        /* animation: fadeIn 0.6s ease-in-out;         */
        opacity: 1;
        transition: opacity 0.4s ease-in-out ;
    }
`



export default Header