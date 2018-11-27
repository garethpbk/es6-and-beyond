import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>new built-in methods</Header>
    <ul>
      <li>
        <CodeMod>Object.assign()</CodeMod> - copy properties to an object
      </li>
      <li>
        <CodeMod>Array.find()</CodeMod> - returns first element that satisfies criteria
      </li>
      <li>
        <CodeMod>Array.findIndex()</CodeMod> - returns index of first element that satisfied criteria
      </li>
      <li>
        <CodeMod>string.repeat()</CodeMod> - creates a new string with specifies number of copies of original string
      </li>
      <li>
        <CodeMod>string.search()</CodeMod> - look for a match between a regex and a string, returns index
      </li>
      <li>
        <CodeMod>Number.isNan()</CodeMod> - is the value <CodeMod>NaN</CodeMod> and type <CodeMod>Number</CodeMod>?
      </li>
      <li>
        <CodeMod>Number.isFinite()</CodeMod> - is the value a finite number?
      </li>
      <li>This isn't every new method added, search for more if interested</li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/26/methods-es6.example')}
      fontSize="18px"
      spanPadding="5%"
    />
  </ModSlide>
);
