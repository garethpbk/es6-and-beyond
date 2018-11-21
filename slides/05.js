import React from 'react';
import { ModSlide, Header, WhiteCodePane } from './Base';

export default () => (
  <ModSlide bgColor="primary">
    <Header>should you use var?</Header>
    <ul>
      <li>
        <strong>Con:</strong> no error thrown if var declared twice
      </li>
      <li>
        <strong>Con:</strong> not block scoped
      </li>
      <li>
        <strong>Con:</strong> Doug Crockford says no
      </li>
      <li>
        <strong>Pro:</strong> sometimes you don't want block scope
      </li>
      <li>
        <strong>Pro:</strong> Kyle Simpson says sometimes there are use cases
      </li>
      <li>
        <strong>Conclusion:</strong> prefer const, then let, unless you have an explicit reason to use var
      </li>
      <li>
        <strong>Disclaimer:</strong> this is my opinion; no "right" answer; do your own research
      </li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/05/vartwice.example')}
      fontSize="20px"
      spanPadding="5%"
    />
  </ModSlide>
);
