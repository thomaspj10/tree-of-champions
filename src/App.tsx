import React, { useEffect } from 'react';
import ReactDOM from "react-dom";

import Header from './components/header/header';
import ReactTooltip from 'react-tooltip';

import './App.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ChampionTree } from './components/champion-tree';
import useStore from './store';
import PlayerStats from './components/player-stats';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header />

      <Content />

      <ReactTooltip place="bottom" effect="solid" className="standard-tooltip" />
    </div>
  );
}

let lastTime: number = performance.now();
function Content() {

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = (performance.now() - lastTime) / 1000;
      lastTime = performance.now();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <ContentStyled>
    <PlayerStats />
    <ChampionTree />
  </ContentStyled>;
}

const ContentStyled = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 30px;
  width: 100%;
  height: 100%;
`;

export default App;
