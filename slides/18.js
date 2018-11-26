import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>object destructuring</Header>
    <ul>
      <li>
        easily pull out property values from objects with <CodeMod>&#123;&#125;</CodeMod>
      </li>
      <li>can assign values to new variable names</li>
      <li>
        can set default values when value being pulled out is <CodeMod>undefined</CodeMod>
      </li>
      <li>nested destructuring is possible, can get convoluted</li>
      <li>values can be destructured without an object declaration</li>
    </ul>
    <CodePaneWrapper column>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/18/destructuring-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/18/destructuring-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
