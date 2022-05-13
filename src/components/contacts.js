import React from "react";
import styled from "styled-components";
import IPhone from "./iPhone/iPhone";

const Contacts = () => {

    return (
        <ContactsContainer>
            <IPhone bgcolor={'#F2F2F7'} />
        </ContactsContainer>
    )
}

const ContactsContainer = styled.div`
    width: 70%;
    max-width: 1000px;
    height: 100vh;
    margin: 90px auto;
    margin-bottom: unset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px){
        width: 90%;
        margin-top: 10%;
        zoom: 1.25;
    }
`

export default Contacts;