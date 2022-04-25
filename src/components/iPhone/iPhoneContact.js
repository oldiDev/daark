import React from "react";
import styled from "styled-components";

const IphoneContact = () => {
    return (
        <IphoneContactsContainer>
            <img src="/iPhoneImage/Contacts/avatar.svg"></img>
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
                        <span>125365</span>
                    </AddressContent>
                </AddressLeftSide>
                <AddressRightSide>
                    <img src="/iPhoneImage/Contacts/map.svg" alt="map"></img>
                </AddressRightSide>
            </Address>
        </IphoneContactsContainer>
    )
}

const IphoneContactsContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Mobile = styled.div`
    width: 90%;
    height: 62px;
    background-color: white;
    margin: .5em 0px;
    border-radius: 11px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`

const MobileTitle = styled.div`
    padding-left: 1em;
`

const MobileLink = styled.a`
    padding-left: 1em;
    padding-top: .5em;
    color: var(--Blue);
`

const Email = styled.div`
    width: 90%;
    height: 62px;
    background-color: white;
    margin: .5em 0px;
    border-radius: 11px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
`

const Address = styled.div`
    width: 90%;
    height: 117px;
    background-color: white;
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
    padding-left: 1em;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const AddressRightSide = styled.div`
    width: 50%;
    text-align: right;
    padding-right: 1em;
`

export default IphoneContact;