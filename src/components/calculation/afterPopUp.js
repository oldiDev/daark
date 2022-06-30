import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { usePersistentStore } from "../../store";

const AfterPopUp = ({ closeAfter }) => {

    const { removeAnySelection } = usePersistentStore();
    const { t } = useTranslation();

    setTimeout(() => {
        removeAnySelection();
        closeAfter();
    }, 3000);

    return (
        <Wrapper>
            <Container>
                <PopUpImg src="/Logo/logo.svg" alt="logo" />
                <PopUpInfo className="tertiaryButtonText">{t('thanks')}<p>{t('will_connect')}</p></PopUpInfo>
            </Container>
        </Wrapper>
    )
}

export default AfterPopUp;

const Wrapper = styled.div`
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

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 70%;
    margin-top: 15%;
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
        margin-top: 50%;
    }
`

const PopUpImg = styled.img`
    margin-top: 3em;
    width: 200px;
    height: 25px; 

    @media screen and (max-width: 767px){
        height: 32px;
        width: 250px;
    }
`

const PopUpInfo = styled.div`
    width: 50%;
    text-align: center;
    margin: 2em 0px;
    

    @media screen and (max-width: 767px){
        width: 95%;
        font-size: 30px;
        line-height: 35px;
        margin: 1.5em 0px;
    }
`
