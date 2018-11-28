import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>spread syntax</Header>
    <ul>
      <li>
        expand an iterable (array, string, object) where zero or more arguments or key-value pairs are expected using
        the <CodeMod>...</CodeMod> operator
      </li>
      <li>many uses: pass array as arguments, copy an array or object, concatenate arrays (and other array methods)</li>
      <li>when used on a string, returns an array of string's characters</li>
      <li>only copies oobjects one level of nesting deep</li>
      <li>array spread in ES6, object spread introduced in ES9/ES2018</li>
      <li>
        <em>
          <strong>spread</strong> all values an iterable into a function or method
        </em>
      </li>
    </ul>
    <CodePaneWrapper column>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/13/spread-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/13/spread-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
