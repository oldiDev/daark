import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/autoplay"

import Footer from '../footer';
import { Image, ImageGroup } from 'react-fullscreen-image';
import { usePersistentStore } from '../../store';
import { getSnapshot } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';


const FootSkill = () => {
    const { projects } = usePersistentStore();

    const fs = getSnapshot(projects.projects[3]);

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
                    fs.swiper?.map((i) =>
                        <SwiperSlide key={i}>
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
                    fs.swiper?.map((i) =>
                        <SwiperSlide key={i}>
                            <ProjectImg src={i.img} />
                        </SwiperSlide>
                    )
                }

                {/* </ImageGroup> */}
            </Swiper>

            <ImageGroup>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={600}
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
                        fs.swiper?.map((i) =>
                            <SwiperSlide key={i}>
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
                    <AboutTitle>PIMS – это напиток на основе чая, который перевернет твое сознание, даст природную энергию и прокачает твои вкусовые рецепторы</AboutTitle>
                    <AboutText>Приложение для доставки напитков PIMS - один из самых интересных проектов, которые создавала наша команда. Стояла задача написать кросс-платформенное решение для клиентов PIMS, которое поможет избежать очередей на кассах и снизить расходы на доставку продукции.</AboutText>
                    <AboutText>Мы создали с нуля мобильное приложение под Android и iOS, связанное со своей панелью администратора. Через админ-панель сотрудники ресторана редактируют позиции меню, следят за статусами заказа и контролируют доставку напитков. Для оформление доставки мы интегрировали сервисы Яндекса, а для приема оплат была проведена интеграция мобильного SDK банка.</AboutText>
                    <AboutText>Программный комплекс разрабатывался нами в течение 7-ми месяцев. Сейчас вы можете скачать результаты нашей работы в плэй-маркетах вашего смартфона.</AboutText>
                </About>
                <Techonolgy>
                    <TechonologyTitle>
                        <h2 style={{ margin: "unset" }}>Технологии</h2>
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
                    <CostTitle>Стоимость разработки: </CostTitle>
                    <Cost>от {fs.cost.toString().split('').reverse().map((e, i) =>
                        e = (i % 3 == 0) && (i != 0) ? e.padEnd(2, ` `) : e
                    ).reverse().join('')} &#8381;</Cost>
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
    width: 1000px;
    height: 700px;
    border-radius: 24px;
    box-shadow: 8px 10px 20px 4px rgba(0, 0, 0, 0.15);
`

const LinkContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const LinkImage = styled.img`
    margin-top: 20px;
    width: 150px;
    height: 50px;

    @media screen and (max-width: 767px){
        width: 210px;
        height: 70px;
    }
`