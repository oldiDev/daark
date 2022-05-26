import React from "react";
import styled from "styled-components";
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";


import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";

const IphonePims = () => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dxjubrqnd'
        }
    });

    const myVideo = cld.video('daark/IMG_0698_wlfoqi');

    myVideo.resize(fill().width(390).height(850)) // Crop the video, focusing on the faces.
        .roundCorners(byRadius(50));


    return (
        <Container>
            {/* <Img src="/iPhoneImage/AppIcon/Pims.svg" alt="pims-logo"></Img> */}
            <Iphone>
                {/* <Video>
                    <AdvancedVideo cldVid={myVideo} autoPlay loop />
                </Video> */}
            </Iphone>
            <Video>
                <AdvancedVideo cldVid={myVideo} autoPlay loop />
            </Video>
        </Container>
    )
}

export default IphonePims;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 767px){
        top: -80px;
    }
`

const Img = styled.img`
    width: 194px;
    height: 194px;
`

const Iphone = styled.div`
    width: 430px;
    height: 880px;
    margin: 0px auto;
    border-radius: 70px;
    background-image: url(/iPhoneImage/iPhoneImage.svg);
    display: flex;
    align-items: center;
    justify-content: center;    
`

const Video = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -10;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: 0px auto;
    padding-left: 7px;
`