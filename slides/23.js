import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>es6 modules</Header>
    <ul>
      <li>an easy way to include code from one JS file in another</li>
      <li>previously, different module formats: CommonJS, AMD, UMD</li>
      <li>ES6 brings a standardized, native module format</li>
      <li>
        <CodeMod>export</CodeMod> and <CodeMod>import</CodeMod> keywords
      </li>
      <li>
        import name of export with <CodeMod>&#123;&#125;</CodeMod>, unless default export
      </li>
      <li>commonly seen in component-based architecture e.g. React</li>
      <li>
        all exported items can be imported with a namespace:
        <br />
        <CodeMod>import * as namespace from './source.js'</CodeMod>
      </li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/21/modules-es6.example')}
      fontSize="18px"
      spanPadding="5%"
    />
  </ModSlide>
);
