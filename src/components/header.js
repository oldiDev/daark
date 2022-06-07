import React, { useEffect, useState } from "react";
import Radium from 'radium';
import { Link, Outlet } from "react-router-dom";
import styled, { css } from "styled-components";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import { languages } from "..";

const Header = () => {

    const [isChecked, setIsChecked] = useState(false);
    const { t } = useTranslation();

    const currentLanguageCode = cookies.get('i18next') || 'ru';
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

    useEffect(() => {
        console.log('Setting page stuff');
        document.body.dir = currentLanguage.dir || 'ltr';
    }, [currentLanguage, t])

    return (
        <header className="header">
            <HeaderContainer>
                <Link to="/" className="mobile-logo" onClick={() => setIsChecked(false)}>
                    <Logo src="/Logo/logo.svg" alt="logo"></Logo>
                </Link>
                <HeaderContent>
                    <li>
                        <Link to="/contacts" className="tertiaryButtonText" onClick={() => setIsChecked(false)}>{t('contacts')}</Link>
                    </li>
                    <li>
                        <Link to="/calculation" className="tertiaryButtonText" onClick={() => setIsChecked(false)}>{t('calculator')}</Link>
                    </li>
                    <li style={{ border: "none" }}>
                        <Link to="/about" className="tertiaryButtonText" onClick={() => setIsChecked(false)}>{t('about')}</Link>
                    </li>
                    <li>
                        <SelectLanguage name="languages" onChange={(e) => {
                            i18next.changeLanguage(e.target.value)
                        }}>
                            {
                                languages.map((e, i) => (
                                    <SelectLanguageOption selected={currentLanguageCode === e.code} key={i} value={e.code}>{e.name}</SelectLanguageOption>
                                ))
                            }
                        </SelectLanguage>
                    </li>
                </HeaderContent>
                {/* <SelectLanguage name="languages" onChange={(e) => {
                    i18next.changeLanguage(e.target.value)
                }}>
                    {
                        languages.map((e, i) => (
                            <SelectLanguageOption key={i} value={e.code}>{e.name}</SelectLanguageOption>
                        ))
                    }
                </SelectLanguage> */}
            </HeaderContainer>
            <Outlet />
        </header>
    )
}


const HeaderContainer = styled.div`
    width: 75%;
    max-width: 1000px;
    height: 40px;
    margin: 0px auto;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    @media screen and (max-width: 767px){
        height: 64px;
        width: 100%;
        justify-content: center;
    }
`;

const HeaderContent = styled.ul`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: unset;

    @media screen and (max-width: 767px){
        display: none;
    }
`;

const Logo = styled.img`
    width: 74px;
    height: 20px;

    @media screen and (max-width: 767px){
        height: 32px;
        width: 112px;
    }
`

const SelectLanguage = styled.select`
    border: none;
    height: 40px;
    font-family: 'Inter';
    font-size: 16px;
    line-height: 19px;

`

const SelectLanguageOption = styled.option`
    background-color: white;
`

export default Header