import React from 'react';
import { ModSlide, Header, CodeMod, CodePaneWrapper, WhiteCodePane } from './Base';

export default () => (
  <ModSlide bgColor="primary">
    <Header>es6: let & const</Header>
    <ul>
      <li>Like var, but block-scoped</li>
      <li>
        Hoisted, but not initialized like var is (
        <a href="https://jsfiddle.net/garethbk/xnL04muk/" target="_blank" rel="noopener noreferrer">
          JSFiddle demo
        </a>
        )
      </li>
      <li>const assignment can't be changed, but value can be altered</li>
      <li>
        <CodeMod>const x = 15; x = 25; // nope</CodeMod>
      </li>
      <li>
        <CodeMod>const x = [1, 2, 3]; x.push(4, 5, 6) // yep</CodeMod>
      </li>
    </ul>
    <CodePaneWrapper>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/04/letconst.example')}
        fontSize="20px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/04/var.example')}
        fontSize="20px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
