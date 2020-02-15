import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import List from 'components/List';
import { colorsDark } from 'styles/palette';

import { Wrapper, Title } from './styles';


function App() {
  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>Hacker News Reader</Title>
          <List/>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
