import React from 'react';
import styled from 'styled-components';
import { ModSlide, Header } from './Base';

import arrowFigure from '../assets/arrow-figure.png';

const BigImg = styled.img`
  padding: 0 0 50px 0;
`;

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>kyle simpson's diagram</Header>
    <BigImg src={arrowFigure} alt="Arrow Figure" />
  </ModSlide>
);
