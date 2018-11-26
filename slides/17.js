import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>method definition shorthand</Header>
    <ul>
      <li>
        declare object methods without the <CodeMod>function</CodeMod> keyword or colon
      </li>
      <li>similar/related to how class methods are declared</li>
    </ul>
    <CodePaneWrapper column>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/17/definitions-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/17/definitions-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
