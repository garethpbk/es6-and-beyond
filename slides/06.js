import React from 'react';
import { ModSlide, Header, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>block scoped functions</Header>
    <ul>
      <li>function declarations in ES6 respect block scope</li>
      <li>use the same name for different functions in different blocks</li>
    </ul>
    <CodePaneWrapper>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/06/dognoisees6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/06/dognoisees5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
