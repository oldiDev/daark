import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const FooterMobile = () => {

    let location = useLocation();

    return (
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
                        {
                            location.pathname == '/calculation' ?
                                <>
                                    <TabImg src="/iPhoneImage/TabBar/calculation-blue.svg" alt="projects"></TabImg>
                                    <TabLabel className="labelSmall blue">Калькулятор</TabLabel>
                                </>
                                :
                                <>
                                    <TabImg src="/iPhoneImage/TabBar/calculation.svg" alt="projects"></TabImg>
                                    <TabLabel className="labelSmall">Калькулятор</TabLabel>
                                </>

                        }
                    </IosTab>
                </Link>
                <Link to="/about" className="contacts-link">
                    <IosTab>
                        {
                            location.pathname == '/about' ?
                                <>
                                    <TabImg src="/iPhoneImage/TabBar/about-blue.svg" alt="projects"></TabImg>
                                    <TabLabel className="labelSmall blue">О нас</TabLabel>
                                </>
                                :
                                <>
                                    <TabImg src="/iPhoneImage/TabBar/about.svg" alt="projects"></TabImg>
                                    <TabLabel className="labelSmall">О нас</TabLabel>
                                </>
                        }

                    </IosTab>
                </Link>
            </Tabs>
        </ContactsFooter>
    )
}

export default FooterMobile

const ContactsFooter = styled.div`
    /* position: sticky; */
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
    background-color: #F2F2F7;
    z-index: 14;

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