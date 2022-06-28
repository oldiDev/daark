import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Footer from '../footer';
import { Image, ImageGroup } from 'react-fullscreen-image';
import { usePersistentStore } from '../../store';
import { getSnapshot } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';

import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { languages } from '../..';



const Pims = () => {

    const { projects } = usePersistentStore();

    const pims = getSnapshot(projects.projects[0]);
    const { t } = useTranslation();
    const currentLanguageCode = cookies.get('i18next') || 'ru';
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

    // console.log(pims)

    const price = (currentLanguageCode == 'ru') ? pims.cost : pims.costUSD ;
    const money = (currentLanguageCode == 'ru') ? <>&#8381;</> : <>&#36;</>;


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
                    pims.swiper?.map((i, e) =>
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
                    pims.swiper?.map((i, e) =>
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
                        pims.swiper?.map((i, e) =>
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
                <Title>{pims.name}</Title>
                <About>
                    <AboutTitle>{t('pims_title')}</AboutTitle>
                    <AboutText>{t('pims_1')}</AboutText>
                    <AboutText>{t('pims_2')}</AboutText>
                    <AboutText>{t('pims_3')}</AboutText>
                </About>
                <LinkContainer>
                    <a href='/projects/pims.pdf' download="pims">
                        <PdfImg src='https://res.cloudinary.com/dxjubrqnd/image/upload/v1656403710/daark/Projects/pdf-svgrepo-com_de5k7n.svg' />
                        
                    </a>
                    <a href='/projects/pims.pdf' download="pims">
                        <PdfText style={{fontWeight: "400"}}>Загрузить презентацию проекта</PdfText>
                    </a>
                </LinkContainer>
                <Techonolgy>
                    <TechonologyTitle>
                        <h2 style={{ margin: "unset" }}>{t('technology')}</h2>
                    </TechonologyTitle>
                    {
                        pims.techology.map((e, i) =>
                            <TechonologyItem key={i}>
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
                    <CostTitle>{t('cost')}</CostTitle>
                    <Cost>{t('from')} {price.toString().split('').reverse().map((e, i) =>
                        e = (i % 3 == 0) && (i != 0) ? e.padEnd(2, ` `) : e
                    ).reverse().join('')} {money}</Cost>
                </CostContainer>
            </Container>
            <Footer />
        </>

    )

}

export default observer(Pims);


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
    width: 39%;
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
    width: 39%;
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
    box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.05);
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
`

const PdfImg = styled.img`
    width: 60px;
    height: 60px;
`

const PdfText = styled.h4`
    font-weight: 400;
    margin-left: 5px;
`