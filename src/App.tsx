import { useState } from 'react';
import { Switch } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";

import "./styles/App.scss";
import { darkTheme } from "./styles/themes";
import GlobalStyle from "./styles/GlobalStyle";

import headerImage from "./img/header.png";

import AppHeader from './components/AppHeader';
import Navigation from './components/Navigation';
import Routes, { Pages } from './components/Routes';

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
    
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle/>
            <Navigation isVisible={isVisible} closeNav={closeNav} pages={Pages}/>
            <AppContainer>
                <AppHeader src={headerImage} alt="Fitness centrum Cardio Sport" openNav={openNav}/>
                
                <Switch>
                    <Routes/>
                </Switch>
            </AppContainer>
        </ThemeProvider>
  );
}

const AppContainer = styled.div`
    margin: 5vh 5vw 5vh 5vw;
`;

export default App;
