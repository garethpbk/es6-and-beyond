import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>when/why arrow functions?</Header>
    <ul>
      <li>they are fun to write and look cool</li>
      <li>useful for short, terse functions</li>
      <li>allow implict returns; single parameters can be naked</li>
      <li>promises and asynch handling</li>
      <li>anywhere they improve readability - this is subjective</li>
      <li>
        handle <CodeMod>this</CodeMod> differently than <CodeMod>function</CodeMod>
      </li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/08/arrowfunc.example')}
      fontSize="18px"
      spanPadding="5%"
    />
  </ModSlide>
);
