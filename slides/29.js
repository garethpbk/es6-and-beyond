import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>ES7/ES2016</Header>
    <ul>
      <li>small release! two additions</li>
      <li>
        <CodeMod>Array.includes</CodeMod> - search an array for a match
      </li>
      <li>
        exponentiation operator <CodeMod>**</CodeMod>
      </li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/29/es7.example')}
      fontSize="18px"
      spanPadding="5%"
    />
  </ModSlide>
);
