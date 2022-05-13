import React from "react";
import styled from "styled-components";

const IphonePims = () => {
    return(
        <Container>
            <Img src="/iPhoneImage/AppIcon/Pims.svg" alt="pims-logo"></Img>
        </Container>
    )
}

export default IphonePims;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 194px;
    height: 194px;
`