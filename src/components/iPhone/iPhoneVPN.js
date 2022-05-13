import React from "react";
import styled from "styled-components";

const IphoneVPN = () => {
    return (
        <Container>
            <Img src="/iPhoneImage/AppIcon/VpnWorld.svg" alt="pims-logo"></Img>
        </Container>
    )
}

export default IphoneVPN

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