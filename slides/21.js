import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>promises</Header>
    <ul>
      <li>an object that represents the result of a deferred, possibly asynchronous operation</li>
      <li>always in one of three states: pending, resolved, or rejected</li>
      <li>
        use the <CodeMod>Promise()</CodeMod> constructor to create a new Promise object
      </li>
      <li>takes in two arguments: resolve and reject</li>
      <li>
        <CodeMod>resolve</CodeMod> function runs on successful completion
      </li>
      <li>
        <CodeMod>reject</CodeMod> function runs on failure or if an error occurs
      </li>
      <li>
        <CodeMod>.then()</CodeMod> method to access results of the promise
      </li>
      <li>
        <CodeMod>.then()</CodeMod> accepts two callbacks, first when resolved, second when rejected...
      </li>
      <li>
        ...but a better way to handle it is with <CodeMod>.catch()</CodeMod> - separate resolve and reject methods
      </li>
      <li>
        <CodeMod>.all()</CodeMod> and <CodeMod>.race()</CodeMod> methods
      </li>
      <li>a complex topic; this is a surface-level overview - research and practice!</li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/27/promises-es6.example')}
      fontSize="18px"
      spanPadding="5%"
    />
  </ModSlide>
);
