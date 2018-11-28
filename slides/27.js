import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>symbol type</Header>
    <ul>
      <li>a new primitive type in JS (six total primitives + object type)</li>
      <li>
        <CodeMod>Symbol()</CodeMod> factory function to create a symbol (only way - no literal)
      </li>
      <li>can take one argument, descriptor, which is like a comment</li>
      <li>every symbol created is completely unique</li>
      <li>
        <CodeMod>Symbol() === Symbol()</CodeMod> is false!
      </li>
      <li>primarily used as object keys - help prevent name clashes</li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/23/symbol-es6.example')}
      fontSize="18px"
      spanPadding="5%"
    />
  </ModSlide>
);
