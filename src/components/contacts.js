import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import FooterMobile from "./footerMobile";
import Footer from "./footer";
import IPhone from "./iPhone/iPhone";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'



const Contacts = () => {

    let location = useLocation();
    const { t } = useTranslation();

    return (
        <>
            <ContactsContainer>
                <ContactsLaptop>
                    <IPhone bgcolor={'#F2F2F7'} />
                </ContactsLaptop>
                <IphoneContactsContainer>
                    <MobileImg src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1653568463/daark/iPhoneImage/Contacts/avatar_gel4a1.svg"></MobileImg>
                    <h1 className="SF_h1">{t('Dan')}</h1>
                    <Mobile>
                        <MobileTitle className="SF_bodySmall">{t('mobile')}</MobileTitle>
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
                            <MobileTitle className="SF_bodySmall">{t('address_iPhone')}</MobileTitle>
                            <AddressContent className="SF_body">
                                <span>{t('city')}</span>
                                <span>{t('street')}</span>
                            </AddressContent>
                        </AddressLeftSide>
                        <AddressRightSide>
                            <MapImg src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1653568463/daark/iPhoneImage/Contacts/map_j6mfex.png" alt="map"></MapImg>
                        </AddressRightSide>
                    </Address>
                </IphoneContactsContainer>
            </ContactsContainer>
            {/* <FooterMobile /> */}
            <Footer></Footer>
        </>
    )
}

const ContactsContainer = styled.div`
    width: 70%;
    max-width: 1000px;
    min-height: calc(100vh - 80px);
    margin: 80px auto;
    /* margin-bottom: unset; */
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
    width: 100%;
    /* height: 100vh; */
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
    padding-left: 0.8em;
    padding-top: .5em;
    color: var(--Blue);
    font-size: 26px;
`

const Email = styled.div`
    width: 100%;
    height: 120px;
    background-color: #F2F2F7;
    margin: .5em 0px;
    border-radius: 11px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`

const Address = styled.div`
    width: 100%;
    height: 200px;
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
    margin-left: 0.8em;
    margin-bottom: 1em;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 26px;
`

const AddressRightSide = styled.div`
    width: 50%;
    text-align: right;
    padding-right: 1em;
`

const MapImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 5px;
`


export default Contacts;