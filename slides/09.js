import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>the dread keyword this</Header>
    <ul>
      <li>
        primary reason for arrow functions is to alter <CodeMod>this</CodeMod> binding
      </li>
      <li>
        do not create their own execution context; inherit <CodeMod>this</CodeMod> from parent context
      </li>
      <li>not suitable for writing object methods</li>
      <li>
        no more <CodeMod>var self = this;</CodeMod> workaround needed
      </li>
      <li>
        <CodeMod>this</CodeMod> is confusing, could have a whole talk about it, practice!
      </li>
      <li>
        <a href="https://jsfiddle.net/garethbk/jy7c5a94/" target="_blank" rel="noopener noreferrer">
          JSFiddle example
        </a>
      </li>
    </ul>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/09/arrowthis.example')}
      fontSize="18px"
      spanPadding="5%"
    />
  </ModSlide>
);
