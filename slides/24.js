import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>symbol type</Header>
    <ul>
      <li>wip</li>
    </ul>
    <CodePaneWrapper column>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/16/computed-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/16/computed-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
