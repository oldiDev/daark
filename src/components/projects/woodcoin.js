import React from "react";
import styled from "styled-components";
import Footer from "../footer";
import IPhone from "../iPhone/iPhone";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

const Woodcoin = () => {
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

export default Woodcoin;

const Container = styled.div`
    width: 75%;
    max-width: 1000px;
    margin: 80px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 767px){
        width: 90%;
    }
`

const LeftSide = styled.div`
    width: 50%;
    height: 90%;
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

const IphoneContainer = styled.div`
    zoom: 1.25;
`
