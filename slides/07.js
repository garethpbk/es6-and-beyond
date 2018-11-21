import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>arrow functions () =></Header>
    <ul>
      <li>a new way to write function expressions (always anonymous, no declarations)</li>
      <li>
        mostly equivalent to <CodeMod>function(){}</CodeMod>, but not entirely
      </li>
      <li>all parameter modifers are available (defaults, destructuring, rest/spread)</li>
    </ul>
    <CodePaneWrapper>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/07/arrow.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/07/function.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
