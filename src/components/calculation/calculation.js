import { observer } from "mobx-react-lite";
import { getSnapshot } from "mobx-state-tree";
import React, { useEffect } from "react";
import styled from "styled-components";
import {
    AppData,
    ProjectData,
    UniqueScreenData,
    DegreeDevelopmentData,
    FunctionsData,
    ServicesData
} from "../../data/calculationData";
import { usePersistentStore } from "../../store";
import CalculationStore, { AppTypeStore } from "../../store/calculationStore";
import CalculationFooter from "./calculationFooter";

const Calculation = () => {

    const { calculation, setCalculation } = usePersistentStore();

    useEffect(() => {
        setCalculation(AppData,
            ProjectData,
            UniqueScreenData,
            DegreeDevelopmentData,
            FunctionsData,
            ServicesData);
    }, [])

    return (
        <>
            <CalculationContainer>
                <CalculationLabel>Рассчитайте стоимость разработки вашего приложения*</CalculationLabel>
                <CalculationSelection>
                    <CalculationSelectionTitle>Для каких платформ вы хотите разработать продукт?</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.appType?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={e.togle}>
                                    <CalculationImage src={e.isSelected ? e.AppTypeIcon.split('.')[0] + '-blue.svg' : e.AppTypeIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{e.AppTypeName}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection>
                    <CalculationSelectionTitle>Для каких платформ вы хотите разработать продукт?</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.projectType?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={e.togle}>
                                    <CalculationImage src={e.isSelected ? e.ProjectTypeIcon.split('.')[0] + '-blue.svg' : e.ProjectTypeIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{e.ProjectTypeName}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection>
                    <CalculationSelectionTitle>Какое количество уникальных экранов будет в приложении?</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.uniqueScreen?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={e.togle}>
                                    <CalculationImage src={e.isSelected ? e.UniqueScreenIcon.split('.')[0] + '-blue.svg' : e.UniqueScreenIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{e.UniqueScreenName}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection>
                    <CalculationSelectionTitle>Какая степень проработки интерфейса приложения?</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.degreeDevelopment?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={e.togle}>
                                    <CalculationImage src={e.isSelected ? e.DegreeDevelopmentIcon.split('.')[0] + '-blue.svg' : e.DegreeDevelopmentIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{e.DegreeDevelopmentName}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection>
                    <CalculationSelectionTitle>Какие функции вы хотите включить в приложение?</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.functions?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={e.togle}>
                                    <CalculationImage src={e.isSelected ? e.FunctionsIcon.split('.')[0] + '-blue.svg' : e.FunctionsIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{e.FunctionsName}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection>
                    <CalculationSelectionTitle>С какими сторонними сервисами нужно взаимодействие?</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.services?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={e.togle}>
                                    <CalculationImage src={e.isSelected ? e.ServicesIcon.split('.')[0] + '-blue.svg' : e.ServicesIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{e.ServicesName}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationDisclaimer>*Окончательная стоимость разработки приложения может отличаться от стоимости, указанной в калькуляторе</CalculationDisclaimer>
            </CalculationContainer>
            <CalculationFooter />
        </>
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
    max-width: 75%;
`

const CalculationImage = styled.img`
    width: 32px;
    height: 32px;
`

const CalculationInput = styled.div`
    width: 216px;
    height: 133px;
    margin: .5em 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--VeryLightGrey);
    border-radius: 24px;
    border: 3px solid white;
    cursor: pointer;
`

const CalculationDisclaimer = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: left;
    letter-spacing: -0.24px;
    color: var(--MediumGrey);
    height: 20vh;
`