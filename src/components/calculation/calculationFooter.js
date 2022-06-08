import React, { useEffect, useRef, useState } from "react";
import { concatenate } from "@cloudinary/url-gen/actions/videoEdit";
import { observer } from "mobx-react-lite";
import { getSnapshot } from "mobx-state-tree";
import styled from "styled-components";
import { usePersistentStore } from "../../store";
import CalculationPopUp from "./calculationPopUp";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import axios from "axios";
import cookies from 'js-cookie'
import { languages } from "../..";


// let useClickOutside = (handler) => {
//     let domNode = useRef();

//     useEffect(() => {
//         let maybeHandler = (event) => {
//             if (!domNode.current.contains(event.target)) {
//                 handler();
//                 console.log('yaaaa!!!!')
//             }
//         };

//         document.addEventListener("mousedown", maybeHandler);

//         return () => {
//             document.removeEventListener("mousedown", maybeHandler);
//         };
//     });

//     return domNode;
// };

const CalculationFooter = ({ price }) => {


    const [show, setShow] = useState(false);
    const { removeAnySelection } = usePersistentStore();
    const { t } = useTranslation();
    const [cost, setCost] = useState(price);

    let handleDelete = () => {
        removeAnySelection();
    }

    let handleSubmit = () => {
        setShow(true)
    }

    const closePopUp = () => {
        setShow(false);
    }

    let togglePopUp = () => {
        setShow(!show);
    }

    const currentLanguageCode = cookies.get('i18next') || 'ru'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)

    let currency = 0;
    // let cost = 0;

    if (currentLanguageCode == 'en') {
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://www.cbr-xml-daily.ru/daily_json.js',
        };

        axios
            .request(options)
            .then(function (response) {
                // console.log(response.data);
                currency = Math.ceil(Math.ceil(response.data.Valute.USD.Value) / 10) * 10;
                console.log(currency);
            })
            .then(() => {
                // let cost = price;
                // console.log(cost);
                setCost((currentLanguageCode == 'en') ? Math.ceil(price / currency) : price);
                // console.log("=====", cost, "=====");

            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // let cost = price;
    // console.log(cost);
    // cost = (currentLanguageCode == 'en') ? Math.ceil(price / currency) : price;
    // console.log("=====", cost, "=====");

    const money = (currentLanguageCode == 'ru') ? <>&#8381;</> : <>&#36;</>


    return (
        <>
            <CalculationFooterWrapper>
                <CalculationFooterContainer>
                    <CalculationFooterLeft>
                        <FooterTitle>{t('cost_footer')}</FooterTitle>
                        <Price>
                            {
                                (currentLanguageCode == 'ru') ?
                                    price.toString().split('').reverse().map((e, i) =>
                                        e = (i % 3 == 0) && (i != 0) ? e.padEnd(2, ` `) : e
                                    ).reverse().join('') :
                                    cost.toString().split('').reverse().map((e, i) =>
                                        e = (i % 3 == 0) && (i != 0) ? e.padEnd(2, ` `) : e
                                    ).reverse().join('')
                            } {money}
                        </Price>
                    </CalculationFooterLeft>
                    <CalculationFooterRight>
                        <FooterBtn className="primaryButtonText" disabled={price == 0} onClick={togglePopUp} style={price == 0 ? { backgroundColor: "var(--LightGrey)", color: "var(--MediumGrey)" } : { backgroundColor: "var(--Blue)" }}>
                            <BigScreen>{t('get_price')}</BigScreen>
                            <MobileText>
                                {
                                    (currentLanguageCode == 'ru') ?
                                        price.toString().split('').reverse().map((e, i) =>
                                            e = (i % 3 == 0) && (i != 0) ? e.padEnd(2, ` `) : e
                                        ).reverse().join('') :
                                        cost.toString().split('').reverse().map((e, i) =>
                                            e = (i % 3 == 0) && (i != 0) ? e.padEnd(2, ` `) : e
                                        ).reverse().join('')
                                } {money}
                            </MobileText>
                        </FooterBtn>
                        <FooterBtnDelete className="tertiaryButtonText" disabled={price == 0} onClick={handleDelete} style={price == 0 ? { color: "var(--MediumGrey)" } : { color: "var(--Blue)" }}>
                            <BigScreen>{t('delete')}</BigScreen>
                            <MobileImg src={price == 0 ? "/Calculation/delete-disabled.svg" : "/Calculation/delete.svg"} alt="delete-button"></MobileImg>
                        </FooterBtnDelete>
                    </CalculationFooterRight>
                </CalculationFooterContainer>
            </CalculationFooterWrapper>
            {
                show ? <CalculationPopUp closePopUp={togglePopUp} /> : null
            }
            {/* {
                show ?
                    <PopUpWrapper>
                        <CalculationPopUp></CalculationPopUp>
                    </PopUpWrapper>
                    :
                    <></>
            } */}
            {/* <CalculationPopUp show={show} /> */}
        </>

    )
}

export default observer(CalculationFooter)

const CalculationFooterWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0;
    border-top: 1px solid #F1F1F1;
    background-color: white;

    @media screen and (max-width: 767px){
        height: 120px;
        bottom: calc(var(--mobile-bar-height) - 1px) ;
    }
`

const CalculationFooterContainer = styled.div`
    width: 75%;
    height: 100%;
    margin: 0px auto;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 767px){
        width: 90%;
    }
`

const CalculationFooterLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 767px){
        display: none;
    }
`

const CalculationFooterRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 767px){
        width: 100%;
    }
`
const FooterTitle = styled.h4`
    margin: unset;
    line-height: 24px;
    color: var(--MediumGrey);
    font-weight: normal;

    @media screen and (max-width: 767px){
        width: 100%;
    }
`

const Price = styled.h2`
    margin: unset;
`

const FooterBtn = styled.button`
    width: 65%;
    max-width: 327px;
    height: 43px;
    background-color: var(--Blue);
    border-radius: 8px;
    color: white;
    letter-spacing: -0.24px;
    cursor: pointer;

    @media screen and (max-width: 767px){
        height: 65px;
    }
`

const FooterBtnDelete = styled.button`
    width: 30%;
    max-width: 169px;
    height: 27px;
    border-radius: 8px;
    background-color: white;
    color: var(--Blue);
    letter-spacing: -0.24px;
    cursor: pointer;

    @media screen and (max-width: 767px){
        height: 48px;
        width: 48px;
    }
`

const MobileText = styled.span`
    @media screen and (min-width: 767px){
        display: none;
    }
`

const MobileImg = styled.img`
    width: 48px;
    height: 48px;

    @media screen and (min-width: 767px){
        display: none;
    }
`

const BigScreen = styled.span`
    @media screen and (max-width: 767px){
        display: none;
    }
`

const PopUpWrapper = styled.div`
    position: fixed;
    z-index: 9998;
    width: 100%;
    min-height: 100vh;
    height: auto;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.8);
    display: flex;
    justify-content: center;
    align-items: baseline;

    @media screen and (max-width: 1490px){
        min-height: 150vh
    }

    @media screen and (max-width: 767px){
        min-height: 150vh;
    }
`