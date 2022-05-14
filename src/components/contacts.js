import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "./footer";
import IPhone from "./iPhone/iPhone";

const Contacts = () => {

    let location = useLocation();

    return (
        <>
            <ContactsContainer>
                <ContactsLaptop>
                    <IPhone bgcolor={'#F2F2F7'} />
                </ContactsLaptop>
                <IphoneContactsContainer>
                    <MobileImg src="/iPhoneImage/Contacts/avatar.svg"></MobileImg>
                    <h1 className="SF_h1">Данила Ворновицкий</h1>
                    <Mobile>
                        <MobileTitle className="SF_bodySmall">мобильный</MobileTitle>
                        <MobileLink className="SF_body" href="tel:+79999797515">
                            +7 (999) 979-75-15
                        </MobileLink>
                    </Mobile>
                    <Email>
                        <MobileTitle className="SF_bodySmall">email</MobileTitle>
                        <MobileLink className="SF_body" href="mailto:hello@daark.ru" >
                            hello@daark.ru
                        </MobileLink>
                    </Email>
                    <Address>
                        <AddressLeftSide>
                            <MobileTitle className="SF_bodySmall">адрес</MobileTitle>
                            <AddressContent className="SF_body">
                                <span>Москва,</span>
                                <span>ул. Малышева 20,</span>
                                <span>109390</span>
                            </AddressContent>
                        </AddressLeftSide>
                        <AddressRightSide>
                            <MapImg src="/iPhoneImage/Contacts/map.png" alt="map"></MapImg>
                        </AddressRightSide>
                    </Address>
                </IphoneContactsContainer>
            </ContactsContainer>
            <ContactsFooter>
                <Tabs>
                    <Link to="/" className="contacts-link">
                        <IosTab>
                            {
                                (location.pathname == '/') ?
                                    <>
                                        <TabImg src="/iPhoneImage/TabBar/projects-blue.svg" alt="projects"></TabImg>
                                        <TabLabel className="labelSmall blue">Наши проекты</TabLabel>
                                    </>
                                    :
                                    <>
                                        <TabImg src="/iPhoneImage/TabBar/projects.svg" alt="projects"></TabImg>
                                        <TabLabel className="labelSmall">Наши проекты</TabLabel>
                                    </>
                            }
                        </IosTab>
                    </Link>
                    <Link to="/contacts" className="contacts-link">
                        <IosTab>
                            {
                                (location.pathname == '/contacts') ?
                                    <>
                                        <TabImg src="/iPhoneImage/TabBar/contacts-blue.svg" alt="projects"></TabImg>
                                        <TabLabel className="labelSmall blue">Контакты</TabLabel>
                                    </>
                                    :
                                    <>
                                        <TabImg src="/iPhoneImage/TabBar/contacts.svg" alt="projects"></TabImg>
                                        <TabLabel className="labelSmall">Контакты</TabLabel>
                                    </>
                            }
                        </IosTab>
                    </Link>
                    <Link to="/calculation" className="contacts-link">
                        <IosTab>
                            <TabImg src="/iPhoneImage/TabBar/calculation.svg" alt="projects"></TabImg>
                            <TabLabel className="labelSmall">Калькулятор</TabLabel>
                        </IosTab>
                    </Link>
                    <Link to="/about" className="contacts-link">
                        <IosTab>
                            <TabImg src="/iPhoneImage/TabBar/about.svg" alt="projects"></TabImg>
                            <TabLabel className="labelSmall">О нас</TabLabel>
                        </IosTab>
                    </Link>
                </Tabs>
            </ContactsFooter>
            <Footer></Footer>
        </>
    )
}

const ContactsContainer = styled.div`
    width: 70%;
    max-width: 1000px;
    height: 100vh;
    margin: 80px auto;
    margin-bottom: unset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px){
        width: 95%;
        margin-top: 80px;
        align-items: flex-start;
    }
`

const ContactsLaptop = styled.div`
    @media screen and (max-width: 767px){
        display: none;
    }
`

const IphoneContactsContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;

    @media screen and (min-width: 767px){
        display: none;
    }
`

const MobileImg = styled.img`
    height: 150px;
    width: 150px;
`

const Mobile = styled.div`
    width: 100%;
    height: 120px;
    background-color: #F2F2F7;
    margin: .5em 0px;
    border-radius: 11px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`


const MobileTitle = styled.div`
    padding-left: 1em;
    font-size: 22px;
`

const MobileLink = styled.a`
    padding-left: 1em;
    padding-top: .5em;
    color: var(--Blue);
    font-size: 22px;
`

const Email = styled.div`
    width: 100%;
    height: 100px;
    background-color: #F2F2F7;
    margin: .5em 0px;
    border-radius: 11px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`

const Address = styled.div`
    width: 100%;
    height: 170px;
    background-color: #F2F2F7;
    margin: .5em 0px;
    border-radius: 11px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const AddressLeftSide = styled.div`
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const AddressContent = styled.div`
    padding-left: 1.2em;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 20px;
`

const AddressRightSide = styled.div`
    width: 50%;
    text-align: right;
    padding-right: 1em;
`

const MapImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 5px;
`

const ContactsFooter = styled.div`
    position: sticky;
    /* position: fixed; */
    bottom: 0;
    height: 100px;
    width: 100%;
    background-color: #F2F2F7;
    /* z-index: 14; */

    @media screen and (min-width: 767px){
        display: none;
    }
`

const Tabs = styled.div`
    width: 100%;
    height: 100%;
    /* padding-top: .5em; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const IosTab = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #828282;
`

const TabImg = styled.img`
    width: 45px;
    height: 45px;
`

const TabLabel = styled.div`
    font-size: 18px;
`


export default Contacts;