import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>object property shorthand</Header>
    <ul>
      <li>
        object properties that have the same identifier as their value references can be shortened - declare only
        identifier
      </li>
      <li>helps keep code DRY by removing repetition</li>
      <li>works very well with object property destructuring</li>
    </ul>
    <CodePaneWrapper>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/15/shorthand-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/15/shorthand-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
