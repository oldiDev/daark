import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Mousewheel, Pagination, Navigation } from "swiper";
import Footer from '../footer';
import { Image, ImageGroup } from 'react-fullscreen-image';
import { usePersistentStore } from '../../store';
import { getSnapshot } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';



const Pims = () => {

    const { projects } = usePersistentStore();

    const pims = getSnapshot(projects.projects[0]);

    // console.log(pims)


    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={80}
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
                    pims.swiper?.map((i) =>
                        <SwiperSlide key={i}>
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
                    modules={[Navigation]}
                    updateOnWindowResize
                    observer
                    centeredSlides={true}
                    observerParents
                    // initialSlide={1}
                    className="for-desktop"
                >
                    {/* <ImageGroup> */}
                    {
                        pims.swiper?.map((i) =>
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
                <Title>{pims.name}</Title>
                <About>
                    <AboutTitle>Тут будет инфа о проектах</AboutTitle>
                    <h3>Люблю пимс, но ****</h3>
                </About>
                <Techonolgy>
                    <TechonologyTitle>
                        <h2 style={{ margin: "unset" }}>Технологии</h2>
                    </TechonologyTitle>
                    {
                        pims.techology.map((e) =>
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
                    <Cost>от {pims.cost.toString()} &#36;</Cost>
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