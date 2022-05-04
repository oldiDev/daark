import React from "react";
import styled from "styled-components";

const CalculationFooter = () => {

    return(
        <CalculationFooterWrapper>
            <CalculationFooterContainer>

            </CalculationFooterContainer>
        </CalculationFooterWrapper>
    )
}

const CalculationFooterWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0;
    border-top: 1px solid #F1F1F1;
`

const CalculationFooterContainer = styled.div`
    width: 75%;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`