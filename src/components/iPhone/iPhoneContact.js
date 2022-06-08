import React from "react";
import styled from "styled-components";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const IphoneContact = () => {

    const { t } = useTranslation();

    return (
        <IphoneContactsContainer>
            <img src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1653568463/daark/iPhoneImage/Contacts/avatar_gel4a1.svg"></img>
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

const MapImg = styled.img`
    width: 91px;
    height: 91px;
    border-radius: 5px;
`

export default IphoneContact;