import React from "react";
import styled from "styled-components";

const IphoneMain = () => {
    return (
        <IphoneMainContainer>
            <IphoneMainTitle className="SF_h2">Main</IphoneMainTitle>
        </IphoneMainContainer>
    )
}

const IphoneMainContainer = styled.div`
    width: 100%;
    height: 90%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

`

const IphoneMainTitle = styled.div`
    width: 100%;
    padding: 11px 0px;
    text-align: center;
    border-bottom: 1px solid var(--DarkGrey);
`

export default IphoneMain