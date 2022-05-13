import React from "react";
import styled from "styled-components";
import IPhone from "./iPhone/iPhone";

const Main = () => {

    return (
        <MainContainer>
            <MainLeftSide>
                <LeftSideSwap>
                    <FirstString>Цифровое решение для вашего бизнеса</FirstString>
                    <SecondString>Полный цикл разработки</SecondString>
                    <ThirdString>Уникальные решения</ThirdString>
                </LeftSideSwap>

                <OurProjects>
                    <BigScreen>
                        <div>Наши проекты</div>
                        <img src="Main/Arrow.svg" alt="arrow"></img>
                    </BigScreen>
                    {/* <MobileScreen>
                        <IPhone bgcolor={'white'} />
                    </MobileScreen> */}
                </OurProjects>
                <MobileScreen>
                    <IPhone bgcolor={'white'} />
                </MobileScreen>
            </MainLeftSide>
            <MainRightSide>
                <IPhone bgcolor={'white'} />
            </MainRightSide>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 80vh;
    margin: 90px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 2;

    @media screen and (max-width: 767px){
        width: 95%;
        /* justify-content: center; */
    }
`

const MainLeftSide = styled.div`
    width: 45%;
    left: 0%;

    @media screen and (max-width: 767px){
        width: 100%;
    }
`

const LeftSideSwap = styled.div`
    position: fixed;
    width: 25%;
    animation: positionTop 0.8s ease-in-out 3.58s 1 normal both;

    @media screen and (max-width: 767px){
        width: 100%;
    }
`

const FirstString = styled.h1`
    color: black;
    animation: mainPageFirst 0.18s ease-in 1s 1 normal both;
`

const SecondString = styled.h1`
    animation: mainPageSecond 1.2s ease-in 1.18s 1 normal both;
`

const ThirdString = styled.h1`
    animation: mainPageSecond 1.2s ease-in 2.38s 1 normal both;
`

const OurProjects = styled.h1`
    position: fixed;
    left: 20%;
    animation: positionBottom 0.6s ease-in-out 3.8s 1 normal both;

    @media screen and (max-width: 767px){
        animation: bottomMobile 0.6s ease-in-out 3.8s 1 normal both;

    }
`

const MainRightSide = styled.div`
    position: fixed;
    top: 90px;
    right: 23%;

    @media screen and (max-width: 767px){
        display: none;
    }
`

const BigScreen = styled.div`
    @media screen and (max-width: 767px){
        display: none;
    }
 `

const MobileScreen = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    margin: 0px auto;

    @media screen and (min-width: 767px){
        display: none;
    }
    @media screen and (max-width: 767px){
        animation: bottomMobile 0.6s ease-in-out 3.8s 1 normal both;
        zoom: 1.25;
    }
 `

export default Main