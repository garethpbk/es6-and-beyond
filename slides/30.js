import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>ES8/ES2017</Header>
    <ul>
      <li>async/await, see slide 22</li>
      <li>parallelism/shared memory (???)</li>
      <li>
        new object methods: <CodeMod>Object.entries()</CodeMod> - loop over object's keys and values,{' '}
        <CodeMod>Object.values</CodeMod> - loop over object's values, <CodeMod>Object.getOwnPropertyDescriptor</CodeMod>{' '}
        - returns descriptor for property directly on object (not in prototype chain)
      </li>
      <li>
        string padding: <CodeMod>String.padStart()</CodeMod> and <CodeMod>String.padEnd()</CodeMod> - two arguments:
        (length, character) - add designated character to pad a string out to designated length (remember{' '}
        <CodeMod>left-pad</CodeMod>?)
      </li>
      <li>trailing commas in function params</li>
    </ul>
  </ModSlide>
);
