import React from "react";
import { observer } from "mobx-react-lite";
import { getSnapshot } from "mobx-state-tree";
import styled from "styled-components";
import { usePersistentStore } from "../store";
import Footer from "./footer";
import FooterMobile from "./footerMobile";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { languages } from "..";

const About = () => {

    const { team } = usePersistentStore();
    const { t } = useTranslation();

    const currentLanguageCode = cookies.get('i18next') || 'ru';
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);


    // console.log(getSnapshot(team.team));

    return (
        <>
            <AboutContainer>
                <h1>{t('team')}</h1>
                <AboutTeam>
                    {
                        team.team?.map((e, i) =>
                            <TeamContainer key={i}>
                                <TeamImg src={e.avatar} alt="avatar" />
                                <TeamName className="primaryButtonText">{currentLanguageCode == 'ru' ?  e.name : e.nameENG}</TeamName>
                                <TeamPosition className="tertiaryButtonText">{e.position}</TeamPosition>
                                <TeamStack>
                                    {
                                        e.stack?.map((f, i) =>
                                            <TeamStackImg src={f.img} alt="stack-img" key={i} />
                                        )
                                    }
                                </TeamStack>
                            </TeamContainer>
                        )
                    }
                </AboutTeam>
            </AboutContainer>
            {/* <FooterMobile /> */}
            <Footer />
        </>

    )
}

export default observer(About)


const AboutContainer = styled.div`
    width: 70%;
    max-width: 1000px;
    min-height: 100vh;
    /* height: 100vh; */
    margin: 60px auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;

    @media screen and (max-width: 767px){
        width: 90%;
        height: fit-content;
    }
`

const AboutTeam = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;

    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`

const TeamContainer = styled.div`
    width: 200px;
    height: 350px;
    margin: 1em 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 767px){
        width: 85%;
        height: 700px;
        margin-left: auto;
        margin-right: auto;
    }
`

const TeamImg = styled.img`
    width: 100%;
    height: 200px;

    @media screen and (max-width: 767px){
        height: 500px;
        width: 100%;
    }
`

const TeamName = styled.div`
    font-weight: normal;
    margin: 4px 0px;
`

const TeamPosition = styled.div`
    margin: 4px 0px;
`

const TeamStack = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 4px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media screen and (max-width: 767px){
        margin-top: 15px
    }
`

const TeamStackImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px 10px 5px 0px;
    box-shadow: 0px 4px 20px rgba(9, 9, 12, 0.1);
    border-radius: 3px;

    @media screen and (max-width: 767px){
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }
`