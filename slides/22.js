import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>es2017: async/await</Header>
    <ul>
      <li>easy syntax for handling asynchronous actions: a function that returns a promise</li>
      <li>
        <CodeMod>async</CodeMod> keyword in front of function
      </li>
      <li>
        <CodeMod>await</CodeMod> keyword to pause function until resolution
      </li>
      <li>
        can have multiple <CodeMod>await</CodeMod> expressions; each returns a promise
      </li>
      <li>async/await = generators + promises</li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/28/async-await-es8.example')}
      fontSize="18px"
      spanPadding="5%"
    />
  </ModSlide>
);
