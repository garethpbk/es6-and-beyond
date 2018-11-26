import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>array destructuring</Header>
    <ul>
      <li>
        pull out array values with <CodeMod>&#91;&#93;</CodeMod>
      </li>
      <li>
        can set default values when value being pulled out is <CodeMod>undefined</CodeMod>
      </li>
      <li>an easy way to swap variable values (no temporary variable)</li>
      <li>ignore values by leaving the index position blank</li>
      <li>destructure an array returned from a function</li>
      <li>
        rest operator <CodeMod>...</CodeMod> available to collect the rest of the values
      </li>
    </ul>
    <CodePaneWrapper column>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/20/destructuring-array-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/20/destructuring-array-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
