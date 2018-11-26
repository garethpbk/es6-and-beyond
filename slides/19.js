import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>function parameter destructuring</Header>
    <ul>
      <li>objects passed as function parameters can be destructured in the parameter</li>
      <li>
        uses the same <CodeMod>&#123;&#125;</CodeMod> syntax
      </li>
      <li>
        available to <CodeMod>function</CodeMod> functions and arrow functions
      </li>
      <li>
        commonly use case: React functional components that accept a <CodeMod>props</CodeMod> object
      </li>
    </ul>
    <CodePaneWrapper column>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/19/parameter-destructuring-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/19/parameter-destructuring-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
