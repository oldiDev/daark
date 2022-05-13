import React from "react";
import styled from "styled-components";

const CalculationPopUp = ({ show }) => {

    if (show) {
        return (
            <>
                <PopUpWrapper>
                    <PopUpContainer>
                        <PopUpImg src="/Logo/logo-big.svg" alt="logo" />
                        <PopUpInfo className="tertiaryButtonText">Пожалуйста, введите адрес электронной почты.
                            На него мы вышлем расчет стоимости приложения.</PopUpInfo>
                            <PopUpInput placeholder="Имя*" required></PopUpInput>
                            <PopUpInput placeholder="Email*" type="email" required></PopUpInput>
                            <PopUpInput placeholder="Телефон (необязательно)"></PopUpInput>
                            <PopUpBtn className="primaryButtonText">Отправить</PopUpBtn>
                    </PopUpContainer>
                </PopUpWrapper>

            </>
        )
    } else {
        return (<></>)
    }
}

export default CalculationPopUp;

const PopUpWrapper = styled.div`
    position: fixed;
    z-index: 9998;
    width: 100%;
    min-height: 100vh;
    height: auto;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.8);
    display: flex;
    justify-content: center;
    align-items: baseline;

    @media screen and (max-width: 1490px){
        min-height: 150vh
    }

    @media screen and (max-width: 767px){
        min-height: 150vh;
    }
`

const PopUpContainer = styled.form`
    position: relative;
    width: 50%;
    max-width: 800px;
    height: 70%;
    margin-top: 5%;
    background-color: white;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 767px){
        width: 95%;
        margin-top: 50%;
    }
`

const PopUpImg = styled.img`
    margin-top: 3em; 
`

const PopUpInfo = styled.div`
    width: 75%;
    text-align: center;
    margin: 2em 0px;
`

const PopUpInput = styled.input`
    width: 75%;
    height: 4em;
    padding-left: 1em;
    background-color: var(--VeryLightGrey);
    margin: 1em;
    border: unset;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: var(--DarkGrey);

    &:focus{
        border-color: var(--Blue);
    }

`
const PopUpBtn = styled.button`
    width: 40%;
    max-width: 181px;
    height: 3em;
    margin: 2em 0px;
    color: white;
    background-color: var(--Blue);
    border-radius: 8px;
`

