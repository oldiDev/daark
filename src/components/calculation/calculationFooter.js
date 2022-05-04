import React, { useState } from "react";
import styled from "styled-components";
import CalculationPopUp from "./calculationPopUp";

const CalculationFooter = () => {

    const [show, setShow] = useState(false);

    return (
        <>
        <CalculationFooterWrapper>
            <CalculationFooterContainer>
                <CalculationFooterLeft>
                    <FooterTitle>Стоимость разработки вашего приложения</FooterTitle>
                    <Price> ₽</Price>
                </CalculationFooterLeft>
                <CalculationFooterRight>
                    <FooterBtn className="primaryButtonText" onClick={() => setShow(true)}>Получить рассчёт стоимости</FooterBtn>
                    <FooterBtnDelete className="tertiaryButtonText">Удалить</FooterBtnDelete>
                </CalculationFooterRight>
            </CalculationFooterContainer>
        </CalculationFooterWrapper>
        <CalculationPopUp show={show} />
        </>
        
    )
}

export default CalculationFooter

const CalculationFooterWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0;
    border-top: 1px solid #F1F1F1;
    background-color: white;
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
`

const CalculationFooterLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const CalculationFooterRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const FooterTitle = styled.h4`
    margin: unset;
    line-height: 24px;
    color: var(--MediumGrey);
    font-weight: normal;
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
`

const FooterBtnDelete = styled.button`
    width: 30%;
    max-width: 169px;
    height: 27px;
    border-radius: 8px;
    color: var(--Blue);
    letter-spacing: -0.24px;
    cursor: pointer;
`