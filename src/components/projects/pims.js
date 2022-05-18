import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Mousewheel, Pagination, Navigation } from "swiper";
import Footer from '../footer';



const Pims = () => {



    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                updateOnWindowResize
                observer
                observerParents
                centeredSlides={true}
                initialSlide={1}
                className="for-mobile"
            >
                <SwiperSlide>
                    <ProjectImg src="/Projects/pims/01 - Default.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectImg src="/Projects/pims/03 - Connected - Speed.png" />
                </SwiperSlide>
                <SwiperSlide>Screen 3</SwiperSlide>
                <SwiperSlide>Screen 4</SwiperSlide>
                <SwiperSlide>Screen 5</SwiperSlide>

            </Swiper>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                updateOnWindowResize
                observer
                centeredSlides={true}
                observerParents
                initialSlide={1}
                className="for-desktop"
            >
                <SwiperSlide>
                    <ProjectImg src="/Projects/pims/01 - Default.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectImg src="/Projects/pims/03 - Connected - Speed.png" />
                </SwiperSlide>
                <SwiperSlide>
                    img
                </SwiperSlide>
                <SwiperSlide>Screen 4</SwiperSlide>
                <SwiperSlide>Screen 5</SwiperSlide>

            </Swiper>
            <OpacityRight />
            <OpacityLeft />
            <Container>
                <Title>PIMS</Title>
                <About>
                    <AboutTitle>Тут будет инфа о проектах</AboutTitle>
                    <h3>Люблю пимс, но ****</h3>
                </About>
                <Techonolgy>
                    <TechonologyTitle>
                        <h2 style={{ margin: "unset" }}>Технологии</h2>
                    </TechonologyTitle>
                    <TechonologyItem>
                        <TechonologyIMG />
                        <TechonologyName>
                            <h3>Название технологии</h3>
                        </TechonologyName>
                    </TechonologyItem>
                    <TechonologyItem>
                        <TechonologyIMG />
                        <TechonologyName>
                            <h3>Название технологии</h3>
                        </TechonologyName>
                    </TechonologyItem>
                    <TechonologyItem>
                        <TechonologyIMG />
                        <TechonologyName>
                            <h3>Название технологии</h3>
                        </TechonologyName>
                    </TechonologyItem>
                    <TechonologyItem>
                        <TechonologyIMG />
                        <TechonologyName>
                            <h3>Название технологии</h3>
                        </TechonologyName>
                    </TechonologyItem>
                </Techonolgy>
                <CostContainer>
                    <CostTitle>Стоимость разработки: </CostTitle>
                    <Cost>от 50 000 000 &#36;</Cost>
                </CostContainer>
            </Container>
            <Footer />
        </>

    )

}

export default Pims;


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
    height: 700px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5));
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
    height: 700px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5));
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
    background-color: #ccc;
`

const TechonologyItem = styled.div`
    display: flex;
    margin: 30px 0px;
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
`