import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IphoneContact from "./iPhoneContact";
import IphoneMain from "./iPhoneMain";

const IPhone = ({ bgcolor }) => {

    let location = useLocation();

    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 10000);
    }, []);
    // console.log(time.getMinutes())
    return (
        <ContactsContainer>
            <Iphone style={{ backgroundColor: `${bgcolor}` }}>
                <Screen>
                    <StatusBar>
                        <LeftSide className="primaryButtonText">
                            {(time.getHours().length < 10) ? '0' + time.getHours() : time.getHours()}
                            :
                            {(time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes()}
                        </LeftSide>
                        <RightSide>
                            <img src="/iPhoneImage/TopNavigation/mobile-signal.svg" alt="mobile-signal"></img>
                            <img src="/iPhoneImage/TopNavigation/Wifi.svg" alt="wi-fi"></img>
                            <img src="/iPhoneImage/TopNavigation/Battery.svg" alt="battery"></img>
                        </RightSide>
                    </StatusBar>
                    {
                        (location.pathname == '/contacts') ?
                            <IphoneContact /> : <IphoneMain />
                    }
                    <IosTabBar>
                        <Tabs>
                            <Link to="/">
                                <IosTab>
                                    {
                                        (location.pathname == '/') ?
                                            <>
                                                <img src="/iPhoneImage/TabBar/projects-blue.svg" alt="projects"></img>
                                                <span className="labelSmall blue">Наши проекты</span>
                                            </>
                                            :
                                            <>
                                                <img src="/iPhoneImage/TabBar/projects.svg" alt="projects"></img>
                                                <span className="labelSmall">Наши проекты</span>
                                            </>
                                    }
                                </IosTab>
                            </Link>
                            <Link to="/contacts">
                                <IosTab>
                                    {
                                        (location.pathname == '/contacts') ?
                                            <>
                                                <img src="/iPhoneImage/TabBar/contacts-blue.svg" alt="projects"></img>
                                                <span className="labelSmall blue">Контакты</span>
                                            </>

                                            : <>
                                                <img src="/iPhoneImage/TabBar/contacts.svg" alt="projects"></img>
                                                <span className="labelSmall">Контакты</span>
                                            </>
                                    }
                                </IosTab>
                            </Link>
                            <Link to="/calculation">
                                <IosTab>
                                    <img src="/iPhoneImage/TabBar/calculation.svg" alt="projects"></img>
                                    <span className="labelSmall">Калькулятор</span>
                                </IosTab>
                            </Link>
                            <Link to="/about">
                                <IosTab>
                                    <img src="/iPhoneImage/TabBar/about.svg" alt="projects"></img>
                                    <span className="labelSmall">О нас</span>
                                </IosTab>
                            </Link>
                        </Tabs>
                        <HomeIndicator>
                            <HomeLine />
                        </HomeIndicator>
                    </IosTabBar>
                </Screen>
            </Iphone>
        </ContactsContainer>
    )
}

const ContactsContainer = styled.div`
    align-items: center;
    display: flexbox;
`

const Iphone = styled.div`
    font-family: 'SFProText';
    width: 437px;
    height: 882px;
    margin: 0px auto;
    border-radius: 70px;
    background-image: url(/iPhoneImage/iPhoneImage.svg);
`

const Screen = styled.div`
    width: 390px;
    height: 844px;
    border-radius: 50px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const StatusBar = styled.div`
    width: 85%;
    height: 47px;
    margin: .2em auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const LeftSide = styled.span`
    width: 54px;
    height: 21px;
`

const RightSide = styled.span`
    width: 78px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:  space-between;
`

const IosTabBar = styled.div`
    width: 100%;
    height: 83px;
    background-color: #F9F9F9;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
`

const Tabs = styled.div`
    width: 100%;
    height: 50px;
    padding-top: .5em;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const IosTab = styled.div`
    width: 97px;
    height: 49px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #828282;
`

const HomeIndicator = styled.div`
    width: 100%;
    height: 34px;
`

const HomeLine = styled.div`
    width: 134px;
    height: 5px;
    margin: 1em auto;
    border-radius: 100px;
    background-color: black;
    align-self: center;
`

export default IPhone;