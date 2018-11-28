import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>ES9/ES2018</Header>
    <ul>
      <li>object rest & spread - see slides 12 & 13</li>
      <li>
        async iteration: <CodeMod>for-await-of</CodeMod>
      </li>
      <li>
        <CodeMod>Promise.finally()</CodeMod> - executes when promise is resolved or rejected
      </li>
    </ul>
  </ModSlide>
);
