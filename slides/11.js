import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>default parameters</Header>
    <ul>
      <li>
        initialize function parameters with a default value - if no value passed to parameters, falls back to default
      </li>
      <li>
        default default parameter is <CodeMod>undefined</CodeMod>; ES6 offers easy syntax to change it:{' '}
        <CodeMod>param = value</CodeMod>
      </li>
      <li>can pass anything into the parameter, including functions</li>
      <li>defaults are available to later parameters to use as defaults</li>
      <li>order is set, must pass parameters sequentially - no way to skip</li>
    </ul>
    <CodePaneWrapper column>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/11/defaults-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/11/defaults-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
