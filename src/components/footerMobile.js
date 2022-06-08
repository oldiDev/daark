import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const FooterMobile = () => {

    let location = useLocation();
    const { t } = useTranslation();

    return (
        <ContactsFooter>
            <Tabs>
                <Link to="/" className="contacts-link">
                    <IosTab>
                        {
                            (location.pathname == '/' || location.pathname == '/pims' || location.pathname == '/vpn' || location.pathname == '/woodcoin' || location.pathname == '/fs')  ?
                                <>
                                    <TabImg src="/iPhoneImage/TabBar/projects-blue.svg" alt="projects"></TabImg>
                                    <TabLabel className="labelSmall blue">{t('our_projects')}</TabLabel>
                                </>
                                :
                                <>
                                    <TabImg src="/iPhoneImage/TabBar/projects.svg" alt="projects"></TabImg>
                                    <TabLabel className="labelSmall">{t('our_projects')}</TabLabel>
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
                                    <TabLabel className="labelSmall blue">{t('contacts')}</TabLabel>
                                </>
                                :
                                <>
                                    <TabImg src="/iPhoneImage/TabBar/contacts.svg" alt="projects"></TabImg>
                                    <TabLabel className="labelSmall">{t('contacts')}</TabLabel>
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
                                    <TabLabel className="labelSmall blue">{t('calculator')}</TabLabel>
                                </>
                                :
                                <>
                                    <TabImg src="/iPhoneImage/TabBar/calculation.svg" alt="projects"></TabImg>
                                    <TabLabel className="labelSmall">{t('calculator')}</TabLabel>
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
                                    <TabLabel className="labelSmall blue">{t('about')}</TabLabel>
                                </>
                                :
                                <>
                                    <TabImg src="/iPhoneImage/TabBar/about.svg" alt="projects"></TabImg>
                                    <TabLabel className="labelSmall">{t('about')}</TabLabel>
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
    bottom: -1px;
    height: var(--mobile-bar-height);
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
    align-items: flex-start;
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