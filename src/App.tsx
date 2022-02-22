import { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import MediaQuery from 'react-responsive'

import { darkTheme } from "./styles/themes";
import GlobalStyle from "./styles/GlobalStyle";

import headerImage from "./img/header.png";

import AppHeader from './components/AppHeader';
import MaterialIcon from './components/MaterialIcon';
import Navigation from './components/Navigation';
import Routes, { Sitemap } from './components/Routes';
import Notifications from './components/Notifications';
import { javaScriptClientDetection, useUserTraffic } from './utilities/analytics';



function App()
{
    const [isVisible , changeVisibility] = useState(false);
    
    function openNav()
    {
        changeVisibility(true);
    }
    
    function closeNav()
    {
        changeVisibility(false);
    }

    useEffect(
        () => 
        {
            javaScriptClientDetection();

            const language = localStorage.getItem("language");
            if(language === null)
            {
                localStorage.setItem("language", "sk");
            }
        },
        []
    );

    useUserTraffic();

    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle/>
                  
            <OpenNavButton onClick={openNav}>
                <MaterialIcon icon="menu" size="34px"/>
                <MediaQuery minDeviceWidth={500}>Menu</MediaQuery>
            </OpenNavButton>
            
            <Navigation isVisible={isVisible} closeNav={closeNav} sitemap={Sitemap}/>
            
            <AppContainer>
                <AppHeader src={headerImage} alt="Fitness centrum Cardio Sport" openNav={openNav}/>
                
                <Switch>
                    <Routes/>
                </Switch>
            </AppContainer>
            
            <Notifications/>
        </ThemeProvider>
  );
}


const OpenNavButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 15px;
    
    font-family: "Bebas Neue";
    font-size: 18px;
    color: ${props => props.theme.color.primary.normal};
    
    transition: all 0.5s;
    
    &:hover
    {
        transform: scale(1.1);
        background-color: #5252529f;
    }
`;

const AppContainer = styled.div`
    margin: 5vh 5vw 5vh 5vw;
`;

export default App;
