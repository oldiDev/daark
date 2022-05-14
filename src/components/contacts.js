import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import IPhone from "./iPhone/iPhone";

const Contacts = () => {

    return (
        <>
            <ContactsContainer>
                <IPhone bgcolor={'#F2F2F7'} />
            </ContactsContainer>
            <Footer></Footer>
        </>
    )
}

const Wrapper = styled.div`
    height: 130vh;

`

const ContactsContainer = styled.div`
    width: 70%;
    max-width: 1000px;
    height: fit-content;
    margin: 90px auto;
    margin-bottom: unset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px){
        width: 90%;
        margin-top: 60px;
        zoom: 1.25;
        align-items: flex-start;
    }
`

export default Contacts;