import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>classes</Header>
    <ul>
      <li>syntactical sugar over JS's prototypical inheritance</li>
      <li>classes are functions! are not hoisted like functions</li>
      <li>
        defined as <strong>class declaration</strong> or <strong>class expression</strong>
      </li>
      <li>
        special <CodeMod>constructor</CodeMod> method to create and initialize
      </li>
      <li>
        inherit from a parent class with <CodeMod>extends</CodeMod> and <CodeMod>super()</CodeMod>
      </li>
      <li>big topic - materials for several talks. check out static members, getters, setters</li>
    </ul>
    <CodePaneWrapper column>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/22/class-es6.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/22/class-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
