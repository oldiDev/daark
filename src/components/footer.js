import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = ({height}) => {
    return (
        <footer style={{height:`${height}`}}>
            <Container>
                <Logo src="/Logo/logo-white.svg" alt="logo-white"></Logo>
                <Navigation>
                    <Title>
                        Навигация
                    </Title>
                    <Link to="/" className="tertiaryButtonText footer-link">Главная</Link>
                    <Link to="/calculation" className="tertiaryButtonText footer-link">Калькулятор</Link>
                    <Link to="/contacts" className="tertiaryButtonText footer-link">Контакты</Link>
                    <Link to="/about" className="tertiaryButtonText footer-link">О нас</Link>
                </Navigation>
                <Contacts>
                    <Title>
                        Контакты
                    </Title>
                    <MobileLink href="tel:+79999797515"  className="tertiaryButtonText">+79999797515</MobileLink>
                    <MobileLink  href="mailto:hello@daark.ru" className="tertiaryButtonText">hello@daark.ru</MobileLink>
                </Contacts>
                <Address>
                    <Title>Адреса</Title>
                    <AddressContent className="tertiaryButtonText">Москва,</AddressContent>
                    <AddressContent className="tertiaryButtonText">ул. Малышева 20, 109390</AddressContent>
                </Address>
            </Container>
        </footer>
    )
}

export default Footer;


const Container = styled.div`
    width: 75%;
    max-width: 1000px;
    height: 75%;
    margin: 0px auto;
    padding-top: 45px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`

const Logo = styled.img`
    margin: 10px 0px;

    @media screen and (max-width: 767px){
        height: 32px;
        width: 112px;
    }
`

const Navigation = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 12px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    a {
        color: white;
        line-height: 19px;
        margin: 4px 0px;

    }

    a:hover{
        color: var(--MediumGrey);
    }

    @media screen and (max-width: 767px){
        margin: 24px 0px;

        a{
             line-height: 28px;
        }
    }
`

const Title = styled.h4`
    color: white;
    margin: unset;
    padding-bottom: 8px;
`

const Contacts = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 12px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const MobileLink = styled.a`
    color: white;
    margin: 4px 0px;
`

const Address = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 12px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const AddressContent = styled.div`
    color: white;
    margin: 4px 0px;
`