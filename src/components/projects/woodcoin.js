import React from "react";
import styled from "styled-components";
import IPhone from "../iPhone/iPhone";

const Woodcoin = () => {
    return(
        <Container>
            <LeftSide></LeftSide>
            <RightSide>
                <IPhone></IPhone>
            </RightSide>
        </Container>
        
    )
}

export default Woodcoin;

const Container = styled.div`
    width: 70%;
    max-width: 1000px;
    margin: 40px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 767px){
        width: 90%;
    }
`

const LeftSide = styled.div`
    width: 50%;
    height: 90%;
    z-index: 0;
`

const RightSide = styled.div`
    /* position: fixed;
    top: 90px;
    right: 23%; */
    width: fit-content;
`
