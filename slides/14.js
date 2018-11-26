import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>template literals</Header>
    <ul>
      <li>string literals that allow js expressione to be embedded within</li>
      <li>
        enclosed in backticks <CodeMod>``</CodeMod> with expressions in placeholders <CodeMod>$&#123;&#125;</CodeMod>
      </li>
      <li>
        essentially a better way to concatenate string parts with evaluated expressions without using{' '}
        <CodeMod>+</CodeMod>, including multi-line strings
      </li>
      <li>formerly called 'template strings' so you may see that, same thing</li>
      <li>
        advanced form called <strong>tagged literals</strong> that can parse template literals with a function (e.g.
        styled-components, graphql-tag)
      </li>
      <li>
        new <CodeMod>str.raw</CodeMod> property and <CodeMod>String.raw()</CodeMod> method
      </li>
      <li>
        syntax is <CodeMod>functionName``</CodeMod> - check out Wes Bos's explanation
      </li>
    </ul>
    <CodePaneWrapper>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/14/template-literal-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/14/template-literal-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
