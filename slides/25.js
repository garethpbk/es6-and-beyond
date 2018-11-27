import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>set & map</Header>
    <ul>
      <li>
        a <strong>Set</strong> is like an array, but with all unique values
      </li>
      <li>
        <CodeMod>new Set([iterable])</CodeMod> function to create a set
      </li>
      <li>
        the <strong>Map</strong> object holds key-value pairs and remembers the original insertion order of the keys
      </li>
      <li>
        <CodeMod>new Map([iterable])</CodeMod> function to create a map
      </li>
      <li>
        unrelated to the <CodeMod>Array.map()</CodeMod> array method
      </li>
      <li>
        also <CodeMod>WeakSet</CodeMod> and <CodeMod>WeakMap</CodeMod> objects, I dunno the difference (anyone?)
      </li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/25/set-map-es6.example')}
      fontSize="18px"
      spanPadding="5%"
    />
  </ModSlide>
);
