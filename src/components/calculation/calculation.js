import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { getSnapshot } from "mobx-state-tree";
import styled from "styled-components";
import { usePersistentStore } from "../../store";
import CalculationFooter from "./calculationFooter";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { languages } from "../..";
import '../../index.css'

const Calculation = () => {

    const { calculation, removePojectTypeSelection } = usePersistentStore();
    const { t } = useTranslation();

    const currentLanguageCode = cookies.get('i18next') || 'ru'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)


    let fullPrice = 0;
    let activeProjectType = false;
    let activeUniqueScreen = false;
    let activeDegreeDevelopment = false;
    let activeFunctions = false;

    const enableStyle = { opacituy: "100%", transition: "opacity .15s ease-in-out" }
    const disableStyle = { opacity: "30%", transition: "opacity .15s ease-in-out" }

    let test = (active) => {
        activeProjectType = (activeProjectType) ? true : active;
        removePojectTypeSelection();
    }


    calculation.appType?.forEach((e) => {
        fullPrice = (e.isSelected) ? fullPrice += e.price : fullPrice;
        activeProjectType = (e.isSelected) ? true : activeProjectType;
        // (e.isSelected) ? activeProjectType = true : test(activeProjectType);
    })
    calculation.projectType?.forEach((e) => {
        fullPrice = (e.isSelected) ? fullPrice += e.price : fullPrice;
        activeUniqueScreen = (e.isSelected && activeProjectType) ? true : activeUniqueScreen;
    })
    calculation.uniqueScreen?.forEach((e) => {
        fullPrice = (e.isSelected) ? fullPrice += e.price : fullPrice;
        activeDegreeDevelopment = (e.isSelected && activeProjectType && activeUniqueScreen) ? true : activeDegreeDevelopment;
    })
    calculation.degreeDevelopment?.forEach((e) => {
        fullPrice = (e.isSelected) ? fullPrice += e.price : fullPrice;
        activeFunctions = (e.isSelected && activeProjectType && activeUniqueScreen && activeDegreeDevelopment) ? true : activeFunctions;
    })
    calculation.functions?.forEach((e) => {
        fullPrice = (e.isSelected) ? fullPrice += e.price : fullPrice;
    })
    calculation.services?.forEach((e) => {
        fullPrice = (e.isSelected) ? fullPrice += e.price : fullPrice;
    })

    // console.log(getSnapshot(calculation));

    return (
        <>
            <CalculationContainer>
                <CalculationLabel>{t('cost_claculation')}*</CalculationLabel>
                <CalculationSelection>
                    <CalculationSelectionTitle>{t('platform')}</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.appType?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={e.togle} >
                                    <CalculationImage src={e.isSelected ? e.AppTypeIcon.split('.')[0] + '-blue.svg' : e.AppTypeIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{e.AppTypeName}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection style={activeProjectType ? enableStyle : disableStyle}>
                    <CalculationSelectionTitle>{t('type')}</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.projectType?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={activeProjectType ? e.togle : null}>
                                    <CalculationImage src={e.isSelected ? e.ProjectTypeIcon.split('.')[0] + '-blue.svg' : e.ProjectTypeIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{currentLanguageCode == "ru" ? e.ProjectTypeName : e.ProjectTypeNameENG}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection style={activeUniqueScreen ? enableStyle : disableStyle}>
                    <CalculationSelectionTitle>{t('number_of_screens')}</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.uniqueScreen?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={activeUniqueScreen ? e.togle : null}>
                                    <CalculationImage src={e.isSelected ? e.UniqueScreenIcon.split('.')[0] + '-blue.svg' : e.UniqueScreenIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{currentLanguageCode == "ru" ? e.UniqueScreenName : e.UniqueScreenNameENG}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection style={activeDegreeDevelopment ? enableStyle : disableStyle}>
                    <CalculationSelectionTitle>{t('interface')}</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.degreeDevelopment?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={activeDegreeDevelopment ? e.togle : null}>
                                    <CalculationImage src={e.isSelected ? e.DegreeDevelopmentIcon.split('.')[0] + '-blue.svg' : e.DegreeDevelopmentIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{currentLanguageCode == "ru" ? e.DegreeDevelopmentName : e.DegreeDevelopmentNameENG}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection style={activeFunctions ? enableStyle : disableStyle}>
                    <CalculationSelectionTitle>{t('functions')}</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.functions?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={activeFunctions ? e.togle : null}>
                                    <CalculationImage src={e.isSelected ? e.FunctionsIcon.split('.')[0] + '-blue.svg' : e.FunctionsIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{currentLanguageCode == "ru" ? e.FunctionsName : e.FunctionsNameENG}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationSelection style={activeFunctions ? enableStyle : disableStyle}>
                    <CalculationSelectionTitle>{t('other_services')}</CalculationSelectionTitle>
                    <CalculationSelectionContent>
                        {
                            calculation.services?.map((e, i) =>
                                <CalculationInput key={i} style={e.isSelected ? { borderColor: "#007AFF" } : { borderColor: "white" }} onClick={activeFunctions ? e.togle : removePojectTypeSelection}>
                                    <CalculationImage src={e.isSelected ? e.ServicesIcon.split('.')[0] + '-blue.svg' : e.ServicesIcon} alt="logo" />
                                    <CalculationInputTitle className="primaryButtonText" style={e.isSelected ? { color: "#007AFF" } : { color: "var(--DarkGrey)" }}>{currentLanguageCode == "ru" ? e.ServicesName : e.ServicesNameENG}</CalculationInputTitle>
                                </CalculationInput>
                            )
                        }
                    </CalculationSelectionContent>
                </CalculationSelection>
                <CalculationDisclaimer>*{t('disclaimer')}</CalculationDisclaimer>
            </CalculationContainer>
            <CalculationFooter price={fullPrice} />
        </>
    )
}

export default observer(Calculation);


const CalculationContainer = styled.div`
    width: 70%;
    max-width: 1000px;
    margin: 90px auto;
    text-align: center;

    @media screen and (max-width: 767px){
        width: 90%;
    }
`

const CalculationLabel = styled.div`
    font-family: "Inter";
    font-size: 36px;
    font-weight: bold;
    line-height: 44px;
    letter-spacing: -0.24px;
    width: 70%;
    margin: 90px auto;

    @media screen and (max-width: 767px){
        width: 100%;
    }
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


    @media screen and (max-width: 767px){
        font-size: 30px;
    }
`

const CalculationSelectionContent = styled.div`
    width: 75%;
    margin: 48px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 992px){
        justify-content: space-evenly;
    }

    @media screen and (max-width: 576px){
        width: 100%;
    }

`

const CalculationInputTitle = styled.div`
    /* color: var(--DarkGrey); */
    margin-top: 16px;
    max-width: 75%;
    
    @media screen and (max-width: 767px){
        font-size: 30px;
    }
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

    @media screen  and (max-width: 576px){
        width: 100%;
    }
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

    @media screen and (max-width: 576px){
        font-size: 20px;
        line-height: 28px;
    }
`