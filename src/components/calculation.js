import React, { useState } from "react";
import styled from "styled-components";
import AppStore from "../store/calculationStore";
import useStore from '../hooks/useStore'

const Calculation = () => {

    const { apps } = useStore();

    let platform = [
        {
            "image": "/Calculation/AppType/Apple.svg",
            "AppName": "Apple",
            "isChoosen": false,
        },
        {
            "image": "/Calculation/AppType/Android.svg",
            "AppName": "Android",
            "isChoosen": false,
        },
        {
            "image": "/Calculation/AppType/Web.svg",
            "AppName": "Web",
            "isChoosen": false
        }
    ]

    // console.log(JSON.stringify(platform))

    return (
        <CalculationContainer>
            <CalculationLabel>Рассчитайте стоимость разработки вашего приложения*</CalculationLabel>
            <CalculationSelection>
                <CalculationSelectionTitle>Для каких платформ вы хотите разработать продукт?</CalculationSelectionTitle>
                <CalculationSelectionContent>
                    {
                        platform.map((e, i) =>
                            <CalculationInput key={i} style={e.isChoosen ? { borderColor: "#007AFF" } : { borderColor: "white" }}>
                                <CalculationImage src={e.image} alt="logo" />
                                <CalculationInputTitle className="primaryButtonText">{e.AppName}</CalculationInputTitle>
                            </CalculationInput>
                        )
                    }
                </CalculationSelectionContent>
            </CalculationSelection>
        </CalculationContainer>
    )
}

export default Calculation


const CalculationContainer = styled.div`
    width: 70%;
    max-width: 1000px;
    margin: 90px auto;
    text-align: center;
`

const CalculationLabel = styled.div`
    font-family: 'Inter';
    font-size: 36px;
    font-weight: bold;
    line-height: 44px;
    letter-spacing: -0.24px;
    width: 70%;
    margin: 90px auto;
`

const CalculationSelection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const CalculationSelectionTitle = styled.h3`
    text-align: center;
    letter-spacing: -0.24px;
`

const CalculationSelectionContent = styled.div`
    width: 75%;
    margin: 48px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const CalculationInputTitle = styled.div`
    color: var(--DarkGrey);
    margin-top: 16px;
`

const CalculationImage = styled.img`
    width: 32px;
    height: 32px;
`

const CalculationInput = styled.button`
    width: 216px;
    height: 133px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--VeryLightGrey);
    border-radius: 24px;
    border: 3px solid white;
    cursor: pointer;
`


