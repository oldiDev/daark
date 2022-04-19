import React from "react";
import styled, { css } from "styled-components";

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <img src="/Logo/logo.svg" alt="logo"></img>
                <HeaderContent>
                    <li>Контакты</li>
                    <li>Калькулятор</li>
                    <li>О нас</li>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}

const HeaderContainer = styled.div`
    width: 80%;
    height: 40px;
    margin: 0px auto;
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const HeaderContent = styled.ul`
    font-family: 'Inter';
    font-size: 16px;
    line-height: 19px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

const li = styled.li`
    margin: 10px;
`;


export default Header