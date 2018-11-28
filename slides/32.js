import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px">
    <Header>ES.Next</Header>
    <ul>
      <li>
        dynamic <CodeMod>import()</CodeMod> - import a module on demand (really cool!!) -{' '}
        <CodeMod>React.lazy()</CodeMod> may use this?
      </li>
      <li>optional chaining - check if an object exists before trying to access its properties (very useful!!)</li>
      <li>
        temporal - standard objects and functions for working with dates and times (no more moment.js or date-fns?
        maybe)
      </li>
      <li>
        decorators - function that wraps another function <CodeMod>@name</CodeMod> - used in Angular 2+ (available in
        TypeScript)
      </li>
      <li>
        <CodeMod>Array.flatMap()</CodeMod> - map an array and flatten into a new array of depth 1
      </li>
      <li>
        <CodeMod>BigInt</CodeMod> - represent numbers larger than 2^53
      </li>
    </ul>
  </ModSlide>
);
