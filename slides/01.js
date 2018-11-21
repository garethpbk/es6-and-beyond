import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Slide, Text } from 'spectacle';
import { Header } from './Base';

import es6Logo from '../assets/es6-logo.svg';

const swoosh = keyframes`
  0% {
    left: -100%;

    opacity: 0;
  }

  75% {
    left: 15%;
  }

  85% {
    left: -10%;
  }

  95% {
    left: 5%;
  }

  100% {
    left: 0%;

    opacity: 1;
  }
`;

const Second = styled(Header)`
  font-size: 100px !important;

  position: relative;
  left: -200%;

  opacity: 0;

  animation-name: ${swoosh};
  animation-delay: 1s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count;
  animation-timing-function: ease-in-out;

`;

const Svg = styled.img`
  width: 375px;

  margin: 0 0 25px 0;

  transition: all 1.5s;

  &:hover {
    transform: rotate(360deg);
  }
`;

const SmallText = styled(Text)`
  font-size: 2rem !important;
`;

export default () => (
  <Slide bgColor="primary">
    <Svg src={es6Logo} alt="ES6 Logo" />
    <Second margin="25px 0">
      <em>and beyond</em>
    </Second>
    <SmallText margin="100px 0" textColor="secondary">
      November 28, 2018
    </SmallText>
  </Slide>
);
