import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import IPhone from "./iPhone/iPhone";

const Contacts = () => {

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
        width: 90%;
        margin-top: 60px;
        zoom: 1.25;
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
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px auto;

    @media screen and (min-width: 767px){
        display: none;
    }
`

const MobileImg = styled.img`
    height: 130px;
    width: 130px;
`

const Mobile = styled.div`
    width: 100%;
    height: 100px;
    background-color: #F2F2F7;
    margin: .5em 0px;
    border-radius: 11px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`


const MobileTitle = styled.div`
    padding-left: 1em;
    font-size: 20px;
`

const MobileLink = styled.a`
    padding-left: 1em;
    padding-top: .5em;
    color: var(--Blue);
    font-size: 20px;
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
    font-size: 18px;
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


export default Contacts;