import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper, Social } from './Base';

import githubLogo from '../assets/github-logo.svg';
import twitterLogo from '../assets/twitter-logo.svg';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>thank you</Header>

    <h3>
      <a className="big" href="https://es6-and-beyond.netlify.com" target="_blank" rel="noopener noreferrer">
        https://es6-and-beyond.netlify.com
      </a>
    </h3>

    <Social>
      <div>
        <img src={githubLogo} alt="Github" />
        <h3>
          <a href="https://github.com/garethpbk/" target="_blank" rel="noopener noreferrer">
            @garethpbk
          </a>
        </h3>
      </div>
      <div>
        <img src={twitterLogo} alt="Twitter" />
        <h3>
          <a href="https://twitter.com/garethbk/" target="_blank" rel="noopener noreferrer">
            @garethbk
          </a>
        </h3>
      </div>
    </Social>
  </ModSlide>
);
