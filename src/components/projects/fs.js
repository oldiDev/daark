import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/autoplay"

import Footer from '../footer';
import { Image, ImageGroup } from 'react-fullscreen-image';
import { usePersistentStore } from '../../store';
import { getSnapshot } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';
import cookies from 'js-cookie';
import { useTranslation } from "react-i18next";


const FootSkill = () => {
    const { projects } = usePersistentStore();
    const { t } = useTranslation();
    const currentLanguageCode = cookies.get('i18next') || 'ru';


    const fs = getSnapshot(projects.projects[3]);
    const price = (currentLanguageCode == 'ru') ? fs.cost : fs.costUSD;
    const money = (currentLanguageCode == 'ru') ? <>&#8381;</> : <>&#36;</>;

    // console.log(pims)


    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={80}
                modules={[Autoplay]}
                autoplay={true}
                loop={true}
                updateOnWindowResize
                observer
                observerParents
                centeredSlides={true}
                // initialSlide={1}
                className="for-mobile"
            >
                {/* <ImageGroup> */}
                {
                    fs.swiper?.map((i, e) =>
                        <SwiperSlide key={e}>
                            <ProjectImg src={i.img} />
                        </SwiperSlide>
                    )
                }

                {/* </ImageGroup> */}
            </Swiper>
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                modules={[Autoplay]}
                autoplay={true}
                loop={true}
                updateOnWindowResize
                observer
                observerParents
                centeredSlides={true}
                // initialSlide={1}
                className="for-tablet"
            >
                {/* <ImageGroup> */}
                {
                    fs.swiper?.map((i, e) =>
                        <SwiperSlide key={e}>
                            <ProjectImg src={i.img} />
                        </SwiperSlide>
                    )
                }

                {/* </ImageGroup> */}
            </Swiper>

            <ImageGroup>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={true}
                    updateOnWindowResize
                    observer
                    centeredSlides={true}
                    observerParents
                    // initialSlide={1}
                    className="for-desktop"
                >
                    {/* <ImageGroup> */}
                    {
                        fs.swiper?.map((i, e) =>
                            <SwiperSlide key={e}>
                                <ProjectImg src={i.img} />
                            </SwiperSlide>
                        )
                    }

                    {/* </ImageGroup> */}
                </Swiper>
            </ImageGroup>


            <OpacityRight />
            <OpacityLeft />
            <Container>
                <Title>{fs.name}</Title>
                <About>
                    <AboutTitle>{t('fs_title')}</AboutTitle>
                    <AboutText>{t('fs_1')}</AboutText>
                    <AboutText>{t('fs_2')}</AboutText>
                    <AboutText>{t('fs_3')} <a href='https://krasnodar-fs.ru/' target="_blank">krasnodar-fs.ru</a></AboutText>
                </About>
                <LinkContainer>
                    {
                        (currentLanguageCode == 'ru') ?
                            <>
                                <a href='https://apps.apple.com/ru/app/foot-skill/id1633652809?l=ru' target="_blank">
                                    <LinkImage src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1653567044/daark/Projects/downloadAppStore_ymttuc.svg" />
                                </a>
                                <a href='https://play.google.com/store/apps/details?id=com.oldi.football' target="_blank">
                                    <LinkImageGoogle src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1654608306/daark/Projects/google-play-badge-ru_vr53it.svg" />
                                </a>
                            </>

                            :
                            <>
                                <a href='https://apps.apple.com/ru/app/foot-skill/id1633652809?l=en' target="_blank">
                                    <LinkImage src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1654602721/daark/Projects/Download_on_the_App_Store_US.svg" />
                                </a>
                                <a href='https://play.google.com/store/apps/details?id=com.oldi.football' target="_blank">
                                    <LinkImageGoogle src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1654608103/daark/Projects/google-play-badge_clmwsc.svg" />
                                </a>
                            </>

                    }
                </LinkContainer>
                <Techonolgy>
                    <TechonologyTitle>
                        <h2 style={{ margin: "unset" }}>{t('technology')}</h2>
                    </TechonologyTitle>
                    {
                        fs.techology.map((e) =>
                            <TechonologyItem>
                                <TechonologyIMG src={e.img} />
                                {/* <img src={e.img}></img> */}
                                <TechonologyName>
                                    <h3>{e.name}</h3>
                                </TechonologyName>
                            </TechonologyItem>
                        )
                    }
                </Techonolgy>

                <CostContainer>
                    <CostTitle>{t('cost')} </CostTitle>
                    <Cost>{t('from')} {price.toString().split('').reverse().map((e, i) =>
                        e = (i % 3 == 0) && (i != 0) ? e.padEnd(2, ` `) : e
                    ).reverse().join('')} {money}</Cost>
                </CostContainer>
            </Container>
            <Footer />
        </>

    )
}

export default observer(FootSkill);


const Container = styled.div`
    width: 75%;
    /* height: 130vh; */
    min-height: 100vh;
    max-width: 1000px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 767px){
        width: 90%;
        /* height: 100vh; */
    }
`

const OpacityRight = styled.div`
    position: absolute;
    top: 80px;
    right: 0;
    left: auto;
    width: 25%;
    height: 770px;
    background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    /* opacity: 50%; */
    z-index: 50;
    @media screen and (max-width: 767px){
        width: 26%;
        /* height: 100vh; */
    }
`
const OpacityLeft = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    right: auto;
    width: 25%;
    height: 770px;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    z-index: 50;
    @media screen and (max-width: 767px){
        width: 26%;
        /* height: 100vh; */
    }
`

const Title = styled.h1`
    margin: 50px auto;
    `

const About = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    `

const AboutTitle = styled.h2`
    margin-top: unset;
    `

const AboutText = styled.h4`
    font-size: 24px;
    margin: 15px 0px;
    line-height: 30px;
    font-weight: normal;
    @media screen and (max-width: 767px){
            font-size: 28px;
            line-height: 36px;
        }
`

const Techonolgy = styled.div`
    width: 100%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const TechonologyTitle = styled.div`
    margin: 30px 0px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TechonologyIMG = styled.img`
    width: 100px;
    height: 100px;
    /* background-color: #ccc; */
    box-shadow: 4px 8px 16px 4px rgba(0, 0, 0, 0.10);
    border-radius: 19px;
`

const TechonologyItem = styled.div`
    display: flex;
    margin: 10px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

const TechonologyName = styled.span`
    height: 100%;
    margin: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const CostContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 767px){
        align-items: flex-end;
        margin-bottom: 60px;
    }
`

const CostTitle = styled.h2`
    @media screen and (max-width: 767px){
        margin: unset;
    }
`

const Cost = styled.h2`
    width: fit-content;
    margin-left: 30px;
    text-align: right;
    @media screen and (max-width: 767px){
        width: 55%;
        margin: unset;
    }
`

const ProjectImg = styled.img`
    width: 323px;
    height: 700px;
    border-radius: 24px;
    box-shadow: 8px 10px 20px 4px rgba(0, 0, 0, 0.15);
`

const LinkContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const LinkImage = styled.img`
    /* margin-top: 10px; */
    width: 150px;
    height: 50px;

    @media screen and (max-width: 767px){
        width: 210px;
        height: 70px;
    }
`

const LinkImageGoogle = styled.img`
    /* margin-top: 10px; */
    margin-left: 20px;
    width: 165px;
    height: 62px;

    @media screen and (max-width: 767px){
        width: 227px;
        height: 85px;
    }
`