import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const IphoneMain = () => {

    const { t } = useTranslation();

    return (
        <IphoneMainContainer>
            <IphoneMainTitle className="SF_h2">{t('our_projects')}</IphoneMainTitle>
            <AppContainer>
                <AppInfo>
                    <img src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1653568134/daark/iPhoneImage/AppIcon/Pims_bd6jwn.svg" alt="pims"></img>
                    <AppName>
                        <div className="SF_h3">PIMS</div>
                        <div className="SF_body dark-grey">{t('pims_description')}</div>
                    </AppName>
                </AppInfo>
                <Link to="pims">
                    <OpenBtn>
                        <span className="buttonText">{t('open')}</span>
                    </OpenBtn>
                </Link>
            </AppContainer>
            <AppContainer>
                <AppInfo>
                    <img src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1653568135/daark/iPhoneImage/AppIcon/Woodkoin_pjwmjc.svg" alt="woodkoin"></img>
                    <AppName>
                        <div className="SF_h3">Woodcoin Wallet</div>
                        <div className="SF_body dark-grey">{t('woodcoin_description')}</div>
                    </AppName>
                </AppInfo>
                <Link to="woodcoin">
                    <OpenBtn>
                        <span className="buttonText">{t('open')}</span>
                    </OpenBtn>
                </Link>
            </AppContainer>
            <AppContainer>
                <AppInfo>
                    <img src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1653568134/daark/iPhoneImage/AppIcon/VpnWorld_xp8ggz.svg" alt="VpnWorld"></img>
                    <AppName>
                        <div className="SF_h3">VPN World</div>
                        <div className="SF_body dark-grey">{t('vpn_description')}</div>
                    </AppName>
                </AppInfo>
                <Link to="vpn">
                    <OpenBtn>
                        <span className="buttonText">{t('open')}</span>
                    </OpenBtn>
                </Link>
            </AppContainer>
            {/* <AppContainer>
                <AppInfo>
                    <img src="https://res.cloudinary.com/dxjubrqnd/image/upload/v1653568134/daark/iPhoneImage/AppIcon/FS_sjmtrv.svg" alt="FootSkill"></img>
                    <AppName>
                        <div className="SF_h3">FootSkill</div>
                        <div className="SF_body dark-grey">Личный кабинет футбольной школы</div>
                    </AppName>
                </AppInfo>
                <Link to="fs">
                    <OpenBtn>
                        <span className="buttonText">{t('open')}</span>
                    </OpenBtn>
                </Link>
            </AppContainer> */}
            <Outlet />
        </IphoneMainContainer>
    )
}

const IphoneMainContainer = styled.div`
    width: 98%;
    height: 90%;
    margin-left: 8px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

`

const IphoneMainTitle = styled.div`
    width: 100%;
    padding: 11px 0px;
    text-align: center;
    box-shadow: 0px 0.5px 0px rgba(0, 0, 0, 0.3);
`

const AppContainer = styled.div`
    width: 90%;
    padding: 8px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--LightGrey);
`

const AppInfo = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const AppName = styled.div`
    margin: 0px .5em;
`

const OpenBtn = styled.button`
    width: 97px;
    height: 24px;
    color: var(--Blue);
    background-color: var(--LightGrey);
    border-radius: 24px;
    border: unset;
    cursor: pointer;
`

export default IphoneMain