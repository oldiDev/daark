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
        // console.log('Setting page stuff');
        document.body.dir = currentLanguage.dir || 'ltr';
    }, [currentLanguage, t])

    return (
        <header className="header">
            <HeaderContainer>
                <Link to="/" className="mobile-logo" >
                    <LogoMobile src="/Logo/logo.svg" alt="logo"></LogoMobile>
                </Link>
                <HeaderContent>
                    <li>
                        <Link to="/" className="mobile-logo">
                            <Logo src="/Logo/logo.svg" alt="logo"></Logo>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts" className="tertiaryButtonText">{t('contacts')}</Link>
                    </li>
                    <li>
                        <Link to="/calculation" className="tertiaryButtonText">{t('calculator')}</Link>
                    </li>
                    <li style={{ border: "none" }}>
                        <Link to="/about" className="tertiaryButtonText" >{t('about')}</Link>
                    </li>
                    <li aria-haspopup="true" style={{ marginTop: "17px" }}>
                        <span>{languages.find((l) => l.code == currentLanguageCode).name}</span> <i class="arrow down"></i>
                        <div style={{ height: "15px" }}></div>
                        <ul class="dropdown">
                            {
                                languages.map(({ code, name, country_code }) => (
                                    <li key={country_code}>
                                        <a
                                            href="#"
                                            onClick={() => {
                                                i18next.changeLanguage(code)
                                            }}
                                        >
                                            <span
                                                style={{
                                                    opacity: currentLanguageCode === code ? 0.5 : 1,
                                                }}
                                            ></span>
                                            {name}
                                        </a>
                                    </li>
                                ))
                            }

                        </ul>
                    </li>
                </HeaderContent>
                <MenuToggle id="menu-toggle" checked={isChecked} type="checkbox" onChange={() => setIsChecked(!isChecked)}/>
                <MenuButtonContainer class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'>
                        <LangIcon src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1654690002/daark/language-svgrepo-com_1_m9lhvo.svg" />
                    </div>
                </MenuButtonContainer>
                <MobileMenu>
                    {
                        languages.map((e) => (
                            <li key={e.code}>
                                <a
                                    href={`#${e.code}`}
                                    onClick={() => {
                                        i18next.changeLanguage(e.code);
                                        setIsChecked(false);
                                    }}
                                >
                                    <span
                                        style={{
                                            opacity: currentLanguageCode === e.code ? 0.5 : 1,
                                        }}
                                    ></span>
                                    {e.name}
                                </a></li>
                        ))
                    }
                </MobileMenu>
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
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: unset;
    list-style: none;

    @media screen and (max-width: 767px){
        display: none;
    }

    a {
        text-decoration: none;
    }

    li {
        text-decoration: none;
        transition-duration: 0.5s;
        font-family: 'Inter';
        font-size: 16px;
        line-height: 19px;
        float: left;
        position: relative;
    }

    li > span{
        padding: auto 0px;
    }

    li:hover, li:focus-within {
        cursor: pointer
    }

    li ul {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        /* transition: all 0.5s ease; */
        /* left: -10px; */
        right: 0px;
        top: 25px;
        display: none;
        /* margin-top: 10px; */
        list-style: none;
        padding: 0.5em 0px;
        padding-left: unset;
        box-shadow: 2px 8px 24px 1px rgba(0, 0, 0, 0.2);
        min-width: 7em;
        z-index: 101;
        background-color: white;
        border-radius: 5px;
        text-align: right;
    }

    li:hover > ul,
    li:focus-within > ul,
    li ul:hover,
    li ul:focus {
        visibility: visible;
        opacity: 1;
        display: block;
    }

    li ul li {
        clear: both;
        width: 50%;
        padding: 1em 2em;
        z-index: 101;
        text-align: center;
        background-color: white;
        /* box-shadow: 2px 8px 24px 1px rgba(0, 0, 0, 1); */
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

const LogoMobile = styled.img`
    display: none;

    @media screen and (max-width: 767px){
        display: block;
        height: 32px;
        width: 112px;
    }
`

const LangIcon = styled.img`
    width: 40px;
    height: 40px;
`

const MobileMenu = styled.ul`
    display: none;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-family: 'Inter';
    font-size: 24px;
    line-height: 30px;
    background-color: white;


    & > li {
        margin: 0 1em;
        overflow: hidden;
    }   

    @media screen and (max-width: 767px) {
        display: flex;
        position: absolute;
        top: 0;
        margin-top: 60px;
        right: 24px;
        flex-direction: column;
        width: 10em;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
    }
`

const MenuButtonContainer = styled.label`
    display: none;
    height: 100%;
    width: 40px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px) {
        display: flex;
        position: absolute;
        right: 24px;
    }

`
const MenuToggle = styled.input`
    display: none;

    & ~ ${MobileMenu} li {
        height: 0;
        margin: 0;
        padding: 0;
        border: 0;
    }

    &:checked ~ ${MobileMenu} {
        height: 8em;
        box-shadow: 2px 8px 24px 1px rgba(0, 0, 0, 0.2);
    }

    &:checked ~ ${MobileMenu} li {
        height: 1em;
        padding: 1.5em;
    }

`

export default Header