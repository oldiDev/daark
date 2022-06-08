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
                <Link to="/" className="mobile-logo" onClick={() => setIsChecked(false)}>
                    <LogoMobile src="/Logo/logo.svg" alt="logo"></LogoMobile>
                </Link>
                <HeaderContent>
                    <li>
                        <Link to="/" className="mobile-logo" onClick={() => setIsChecked(false)}>
                            <Logo src="/Logo/logo.svg" alt="logo"></Logo>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts" className="tertiaryButtonText" onClick={() => setIsChecked(false)}>{t('contacts')}</Link>
                    </li>
                    <li>
                        <Link to="/calculation" className="tertiaryButtonText" onClick={() => setIsChecked(false)}>{t('calculator')}</Link>
                    </li>
                    <li style={{ border: "none" }}>
                        <Link to="/about" className="tertiaryButtonText" onClick={() => setIsChecked(false)}>{t('about')}</Link>
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
                <SelectLanguageMobile>
                    <li>
                        <span>
                            <LangIcon src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1654690002/daark/language-svgrepo-com_1_m9lhvo.svg" />
                        </span>
                        <ul name="languages" onClick={(e) => {
                            i18next.changeLanguage(e.target.value)
                        }}>
                            {
                                languages.map(({ code, name, country_code }) => (
                                    <li key={country_code}>
                                        <a
                                            href={`#${code}`}
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
                </SelectLanguageMobile>
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

const SelectLanguageMobile = styled.ul`
    border: none;
    height: fit-content;
    font-family: 'Inter';
    font-size: 18px;
    line-height: 23px;
    display: none;
    list-style: none;

    @media screen and (max-width: 767px){
        display: block;
        position: absolute;
        right: 24px;
        left: auto;
        text-decoration: none;
        padding-left: unset;
        margin: 0;

        li {
            text-decoration: none;
            transition-duration: 0.5s;
            font-family: 'Inter';
            font-size: 24px;
            line-height: 23px;
            float: left;
            position: relative;
        }

        li > span {
            align-self: center;
        }

        li:hover, li:focus-within {
            cursor: pointer
        }

        li ul {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            transition: all 0.5s ease;
            right: 0;
            display: none;
            margin-top: 7px;
            list-style: none;
            padding: 0.5em 0px;
            padding-left: unset;
            z-index: 101;
            background-color: white;
            box-shadow: 2px 8px 24px 1px rgba(0, 0, 0, 0.2);
            border-radius: 15px;
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
            text-align: center;
        }

        li ul li a {
            width: 100%;
            height: 100%;
        }
    }

    @media (hover: none) and (pointer: fine){
        li:hover > ul,
        li:focus-within > ul,
        li ul:hover,
        li ul:focus {
            visibility: hidden;
            opacity: 1;
            display: none;
        }
    }

`

const SelectLanguageOption = styled.li`
    background-color: white;
    clear: both;
    width: 100%;
    padding: 0.3em;
    padding-left: unset;
`
const LangIcon = styled.img`
    width: 40px;
    height: 40px;
`

export default Header