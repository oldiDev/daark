import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import IPhone from "../iPhone/iPhone";
import { Mousewheel, Pagination } from "swiper";
import Footer from "../footer";

const Vpn = () => {
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
                                <IPhone bgcolor={"white"}></IPhone>
                            </IphoneContainer>

                        </SwiperSlide>
                        <SwiperSlide className="swiper-slider">
                            <MainText>Мы разработали самое дешевое и быстрое VPN-решение на рынке.</MainText>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slider">
                            <h1>Проблема:</h1>
                            <SubText className="tertiaryButtonText">
                                Из-за политической ситуации граждане России оказались отрезанными от многих интернет-ресурсов. Единственный способ получить доступ к Facebook, Instagram или другому заблокированному источнику - это использовать VPN. Тем не менее, бесплатные версии большинства VPN работают довольно медленно, в то время как оплата премиум-сервиса обходится очень дорого.
                            </SubText>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slider">
                            <h1>Цель:</h1>
                            <SubText className="tertiaryButtonText">
                                Снизить цену на VPN-сервис, сохраняя при этом скорость.
                            </SubText>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slider">
                            <h1>Решение: </h1>
                            <SubText className="tertiaryButtonText">
                                Мы создали приложение, которое использует только один сервер, что значительно сокращает затраты, позволяя пользователям использовать быстрый VPN по более низкой цене.
                            </SubText>
                        </SwiperSlide>
                    </Swiper>
                </LeftSide>
                <RightSide>
                    <IPhone></IPhone>
                </RightSide>
            </Container>
            <Footer />
        </>


    )
}

export default Vpn;

const Container = styled.div`
    width: 70%;
    max-width: 1000px;
    margin: 60px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 767px){
        width: 90%;
    }
`

const MainText = styled.h1`
    font-weight: bold;
`

const LeftSide = styled.div`
    width: 50%;
    z-index: 0;

    @media screen and (max-width: 767px){
        width: 100%;
    }
`

const SubText = styled.div`
    margin: 30px 0;
    line-height: 19.36px;
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
const IphoneContainer = styled.div`
    zoom: 1.25;
`
