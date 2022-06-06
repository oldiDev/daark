import React, { useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import styled from "styled-components";
import OutsideAlerter from "../../hooks/OutsideClose";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'


const CalculationPopUp = ({ closePopUp }) => {

    // const [open, setOpen] = useState(false);
    const { t } = useTranslation();


    // setTimeout(() => {
    //     setOpen(show);
    // }, 100);

    // const ref = useDetectClickOutside({ onTriggered: show });

    // const modalRef = useRef();

    // useEffect(() => {
    //     const clickOutsideContent = (e) => {
    //         if (e.target === modalRef.current) {
    //             setOpen(false);
    //         }
    //     };
    //     window.addEventListener('click', clickOutsideContent);
    //     return () => {
    //         window.removeEventListener('click', clickOutsideContent);
    //     };
    // }, []);

    // if (open) {
    return (
        <>
            <PopUpWrapper>
                <PopUpContainer>
                    <CloseBtnContainer>
                        <CloseBtn onClick={() => closePopUp()}>
                            <img src="/Calculation/delete-disabled.svg"></img>
                        </CloseBtn>
                    </CloseBtnContainer>
                    <PopUpImg src="/Logo/logo-big.svg" alt="logo" />
                    <PopUpInfo className="tertiaryButtonText">{t('enter_email')}</PopUpInfo>
                    <PopUpInput placeholder={`${t('name')}`} required></PopUpInput>
                    <PopUpInput placeholder="Email*" type="email" required></PopUpInput>
                    <PopUpInput placeholder={`${t(`phone`)}`}></PopUpInput>
                    <PopUpBtn className="primaryButtonText" id="email">{t('send')}</PopUpBtn>
                </PopUpContainer>
            </PopUpWrapper>

        </>
    )
    // } else {
    //     return (<></>)
    // }
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
    width: 100%;
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
        height: 100%;
        margin: 0px auto;
        margin-top: 20%;
    }
`

const PopUpImg = styled.img`
    margin-top: 3em; 

    @media screen and (max-width: 767px){
        width: 148px;
    }
`

const PopUpInfo = styled.div`
    width: 75%;
    text-align: center;
    margin: 2em 0px;
    

    @media screen and (max-width: 767px){
        width: 95%;
        font-size: 30px;
        line-height: 35px;
        margin: 1.5em 0px;
    }
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

    @media screen and (max-width: 767px){
        margin: .5em 0px;
        width: 85%;
        height: 80px;
        font-size: 25px;
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

    @media screen and (max-width: 767px){
        margin: 1em 0px;
        margin-bottom: 1.5em;
        height: 2.5em;
        width: 60%;
        font-size: 30px;
        max-width: 500px;
    }
`

const CloseBtnContainer = styled.div`
    align-items: right;
    position: absolute;
    right: 16px;
    top: 16px;
`

const CloseBtn = styled.button`
    background-color: white;
    z-index: 99;
    cursor: pointer;
`

