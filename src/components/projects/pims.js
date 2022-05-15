import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import IPhone from '../iPhone/iPhone';
import Footer from '../footer';
import IphonePims from '../iPhone/IPhonePims';

import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";


import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";



const Pims = () => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dxjubrqnd'
        }
    });

    const myVideo = cld.video('daark/IMG_0698_wlfoqi');

    myVideo.resize(fill().width(390).height(850)) // Crop the video, focusing on the faces.
        .roundCorners(byRadius(0));


    return (
        <>
            <Container>
                <LeftSide>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        direction={"vertical"}
                        mousewheel={true}
                        speed={700}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        modules={[Mousewheel, Pagination]}
                        className="slider-style"
                    // autoHeight={true}
                    >
                        <SwiperSlide className='swiper-slider first-slide'>
                            <IphoneContainer>
                                <AdvancedVideo cldVid={myVideo} autoPlay/>
                            </IphoneContainer>

                        </SwiperSlide>
                        <SwiperSlide className="swiper-slider">
                            <MainText>Мы разработали приложение доставки еды для популярного кафе из Москвы. <b>Это привело к увеличению выручки на 20% за счет прямых продаж клиентам.</b></MainText>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slider">
                            <h1>Проблема:</h1>
                            <SubText >PIMS открыли свое первое заведение в центре города и столкнулись с длинными очередями из-за высокого спроса. После открытия еще 5 локаций и подключения к Яндекс.Еде они также начали получать 1000 онлайн-заказов на доставку ежемесячно. Они хотели решить проблему длинных очередей, а также сэкономить 30%-ную комиссию, которую они платили Яндексу за свою службу доставки.</SubText>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slider">
                            <h1>Цель:</h1>
                            <SubText >Создать решение для предварительного заказа еды на вынос, чтобы не стоять в очереди, а также прямую службу доставки от PIMS.</SubText>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slider">
                            <h1>Решение: </h1>
                            <SubText>Простое в использовании приложение с возможностью заказа на вынос или доставки.</SubText>
                        </SwiperSlide>
                    </Swiper>
                </LeftSide>
                <RightSide>
                    <IphonePims />
                </RightSide>
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
    margin: 80px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 767px){
        width: 90%;
        /* height: 100vh; */
    }
`

const MainText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
`

const LeftSide = styled.div`
    width: 50%;
    z-index: 0;

    @media screen and (max-width: 767px){
        width: 100%;
    }
`

const RightSide = styled.div`
                /* position: fixed;
                top: 90px;
                right: 23%; */
    width: fit-content;

    @media screen and (max-width: 767px){
        display: none;
    }
`

const SubText = styled.h4`
    margin: 30px 0;
    line-height: 27px;
    font-weight: 400;

    @media screen and (max-width: 767px){
        margin-top: 0;
        line-height: 37px;

    }
`

const IphoneContainer = styled.div`
    zoom: 1.25;
`

