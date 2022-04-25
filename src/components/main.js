import React from "react";
import styled from "styled-components";
import IPhone from "./iPhone/iPhone";

const Main = () => {
    return (
        <MainContainer>
            <div>
                <h1>Some info</h1>
            </div>
            <MainRightSide>
                <IPhone />
            </MainRightSide>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 70%;
    height: 110vh;
    margin: 90px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const MainLeftSide = styled.div`
    width: 45%;
`

const MainRightSide = styled.div`
    position: fixed;
    top: 90px;
    left: 63%;
`

export default Main