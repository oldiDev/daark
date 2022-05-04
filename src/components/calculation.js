import { observer } from "mobx-react-lite";
import { getSnapshot } from "mobx-state-tree";
import React, { useState } from "react";
import styled from "styled-components";
import { AppData } from "../data/calculationData";
import { useStore } from "../store";
import CalculationStore, { AppTypeStore } from "../store/calculationStore";

const Calculation = () => {
    const store = useStore()

    console.log(store)

    return (
        <CalculationContainer>
            <CalculationLabel>Рассчитайте стоимость разработки вашего приложения*</CalculationLabel>
            <CalculationSelection>
                <CalculationSelectionTitle>Для каких платформ вы хотите разработать продукт?</CalculationSelectionTitle>
                {/* <CalculationSelectionContent>
                    {
                        store.calculation.appType.map((e, i) =>
                            <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={e.togle}>
                                <CalculationImage src={e.isSelected ? e.AppTypeIcon.split('.')[0] + '-blue.svg' : e.AppTypeIcon} alt="logo" />
                                <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{e.AppTypeName}</CalculationInputTitle>
                            </CalculationInput>
                        )
                    }
                </CalculationSelectionContent> */}
            </CalculationSelection>
        </CalculationContainer>
    )
}

export default observer(Calculation);


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
    letter-spacing: -0.2px;
`

const CalculationSelectionContent = styled.div`
    width: 75%;
    margin: 48px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const CalculationInputTitle = styled.div`
    /* color: var(--DarkGrey); */
    margin-top: 16px;
`

const CalculationImage = styled.img`
    width: 32px;
    height: 32px;
`

const CalculationInput = styled.div`
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


