import React from "react";
import styled from "styled-components";

const CalculationPopUp = (show) => {

    if (show) {
        return (
            <PopUpContainer>
                <img src="/Logo/logo-big.svg" alt="logo" />
            </PopUpContainer >
        )
    } else {
        return (<></>)
    }
}

export default CalculationPopUp;

const PopUpContainer = styled.form`
    z-index: 9999;
    width: 80%;
    height: 50%;
    margin: 100px auto;
    background-color: white;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

