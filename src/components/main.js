import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import FooterMobile from "./footerMobile";
import Footer from "./footer";
import IPhone from "./iPhone/iPhone";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t } = useTranslation()

    return (
        <>
            <MainContainer>
                <MainLeftSide>
                    <LeftSideSwap>
                        <FirstString>{t('digital_solution')}</FirstString>
                        <SecondString>{t('development_cycle')}</SecondString>
                        <ThirdString>{t('unique_solutions')}</ThirdString>
                    </LeftSideSwap>

                    <OurProjects>
                        <BigScreen>
                            <div>{t('our_projects')}</div>
                            <img src="Main/Arrow.svg" alt="arrow"></img>
                        </BigScreen>
                    </OurProjects>
                    <MobileScreen>
                        {/* <IPhone bgcolor={'white'} /> */}
                        {/* <IphoneMainContainer> */}
                        <IphoneMainTitle className="SF_h2">Наши проекты</IphoneMainTitle>
                        <AppContainer>
                            <AppInfo>
                                <AppImg src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1654517761/daark/iPhoneImage/AppIcon/PIMS_adjqzt.svg" alt="pims"></AppImg>
                                <AppName>
                                    <div className="SF_h3">PIMS</div>
                                    <div className="SF_body dark-grey">Доставка еды</div>
                                </AppName>
                            </AppInfo>
                            <Link to="pims">
                                <OpenBtn>
                                    <span className="buttonText">Открыть</span>
                                </OpenBtn>
                            </Link>
                        </AppContainer>
                        <AppContainer>
                            <AppInfo>
                                <AppImg src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1654517761/daark/iPhoneImage/AppIcon/WoodCoin_ux0sbp.svg" alt="woodkoin"></AppImg>
                                <AppName>
                                    <div className="SF_h3">Woodcoin Wallet</div>
                                    <div className="SF_body dark-grey">Крипто-кошелёк</div>
                                </AppName>
                            </AppInfo>
                            <Link to="woodcoin">
                                <OpenBtn>
                                    <span className="buttonText">Открыть</span>
                                </OpenBtn>
                            </Link>
                        </AppContainer>
                        <AppContainer>
                            <AppInfo>
                                <AppImg src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1654517761/daark/iPhoneImage/AppIcon/VPN_World_suu08e.svg" alt="VpnWorld"></AppImg>
                                <AppName>
                                    <div className="SF_h3">VPN World</div>
                                    <div className="SF_body dark-grey">Безопасное подключение</div>
                                </AppName>
                            </AppInfo>
                            <Link to="vpn">
                                <OpenBtn>
                                    <span className="buttonText">Открыть</span>
                                </OpenBtn>
                            </Link>
                        </AppContainer>
                        {/* <AppContainer>
                            <AppInfo>
                                <AppImg src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1653568134/daark/iPhoneImage/AppIcon/FS_sjmtrv.svg" alt="FootSkill"></AppImg>
                                <AppName>
                                    <div className="SF_h3">FootSkill</div>
                                    <div className="SF_body dark-grey">Личный кабинет футбольной школы</div>
                                </AppName>
                            </AppInfo>
                            <Link to="fs">
                                <OpenBtn>
                                    <span className="buttonText">Открыть</span>
                                </OpenBtn>
                            </Link>
                        </AppContainer> */}
                        <Outlet />
                        {/* </IphoneMainContainer> */}
                    </MobileScreen>
                </MainLeftSide>
                <MainRightSide>
                    <IPhone bgcolor={'white'} />
                </MainRightSide>
            </MainContainer>
            {/* <FooterMobile /> */}
            <Footer></Footer>
        </>

    )
}

const MainContainer = styled.div`
    width: 75%;
    max-width: 1000px;
    /* height: 90vh; */
    min-height: 100vh;
    margin: 80px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    overflow: hidden;


    @media screen and (max-width: 767px){
        width: 100%;
        /* justify-content: center; */
        height: 100vh;
        margin-top: 60px;
        justify-content: center;
        align-items: flex-start;
    }
`

const MainLeftSide = styled.div`
    width: 45%;
    height: fit-content;
    @media screen and (max-width: 767px){
        width: 100%;
    }
`

const LeftSideSwap = styled.div`
    /* position: fixed; */
    width: 100%;
    animation: positionTop 0.8s ease-in-out 3.58s 1 normal both;

    @media screen and (max-width: 767px){
        display: none;
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
    /* position: fixed; */
    animation: positionBottom 0.6s ease-in-out 3.8s 1 normal both;

    @media screen and (max-width: 767px){
        animation: bottomMobile 0.6s ease-in-out 3.8s 1 normal both;

    }
`

const MainRightSide = styled.div`
    /* position: fixed;
    top: 90px;
    right: 23%; */
    @media screen and (max-width: 767px){
        display: none;
    }

    @media screen and (min-width: 1440px)  and (max-width: 2560px){
        right: 30%;
    }
`

const BigScreen = styled.div`
    @media screen and (max-width: 767px){
        display: none;
    }
 `

const MobileScreen = styled.div`
    margin: 0px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 767px){
        display: none;
    }
    @media screen and (max-width: 767px){
        animation: bottomMobile 0.6s ease-in-out 0.3s 1 normal both;
        zoom: 1.25;
    }
 `

const IphoneMainContainer = styled.div`
    width: 100%;
    height: fit-content;
    /* margin-left: 8px; */
    margin: 0px auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

`

const IphoneMainTitle = styled.div`
    width: 100%;
    padding: 11px 0px;
    text-align: center;
    box-shadow: 0px 0.5px 0px rgba(0, 0, 0, 0.3);
    font-size: 35px;
    font-weight: 500;
`

const AppContainer = styled.div`
    width: 95%;
    height: fit-content;
    padding: 16px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--LightGrey);
`

const AppInfo = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const AppImg = styled.img`
    width: 100px;
    height: 100px;
`

const AppName = styled.div`
    margin: 0px .5em;
    font-size: "SFProText";
`

const OpenBtn = styled.button`
    width: 150px;
    height: 40px;
    color: var(--Blue);
    background-color: var(--LightGrey);
    border-radius: 24px;
    border: unset;
    cursor: pointer;
`

export default Main