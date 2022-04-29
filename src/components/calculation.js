import React from "react";
import styled from "styled-components";

const Calculation = () => {

    let platform = [
        { name: 'iOS', image: '', choosen: false },
        { name: 'Android', image: '', choosen: false },
        { name: 'Web', image: '', choosen: false},
    ]

    return (
        <CalculationContainer>
            <CalculationLabel>Рассчитайте стоимость разработки
                вашего приложения*</CalculationLabel>
        </CalculationContainer>
    )
}

export default Calculation


const CalculationContainer = styled.div`
    width: 70%;
    /* max-width: 1000px; */
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