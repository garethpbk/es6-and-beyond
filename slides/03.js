import React from 'react';
import styled from 'styled-components';
import { ModSlide, Header } from './Base';

import babelLogo from '../assets/babel-logo.svg';
import traceurLogo from '../assets/traceur-logo.svg';
import tsLogo from '../assets/ts-logo.svg';

const Logos = styled.div`
  display: flex;
  align-items: center;

  margin: 25px 0;
`;

const Svg = styled.img`
  width: 300px;

  height: ${props => props.height};
`;

export default () => (
  <ModSlide transition={['zoom']} bgColor="primary">
    <Header textColor="secondary" margin="25px 0">
      transpiling & browser support
    </Header>
    <ul>
      <li>Not all browsers support ES6/ES7/ESetc.</li>
      <li>
        <strong>Transpilers</strong> turn new code into browser-readable code
      </li>
      <li>Shims/polyfills can also add support for new features</li>
      <li>
        <a href="http://kangax.github.io/compat-table/es6/" target="_blank" rel="noopener noreferrer">
          http://kangax.github.io/compat-table/es6/
        </a>
      </li>
      <li>
        <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">
          https://caniuse.com/
        </a>
      </li>
      <li>Other languages that compile to JS (TypeScript, CoffeeScript, Elm, Dart, ClojureScript, and many more)</li>
      <li>Will give examples of ES6+ vs ES5 code for several features (Babel repl)</li>
      <li>
        <strong>ES6 is 'vanilla' JavaScript</strong>; part of the ES specification
      </li>
    </ul>
    <Logos>
      <Svg src={babelLogo} alt="Babel" />
      <Svg src={traceurLogo} alt="Traceur" height="200px" />
      <Svg src={tsLogo} alt="TypeScript" />
    </Logos>
  </ModSlide>
);
