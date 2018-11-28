import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
  <ModSlide bgColor="primary" padding="0px" overflow>
    <Header>rest parameters</Header>
    <ul>
      <li>
        pass in a variable numbers of arguments as the last parameter using the <CodeMod>...</CodeMod> operator
      </li>
      <li>arguments are passed in as an array - array methods available</li>
      <li>array rest in ES6, object rest introduced in ES9/ES2018</li>
      <li>
        <em>
          pass the <strong>rest</strong> of the arguments into the function
        </em>
      </li>
    </ul>
    <CodePaneWrapper column>
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/12/rest-parameters.example')}
        fontSize="18px"
        spanPadding="5%"
      />
      <WhiteCodePane
        lang="javascript"
        source={require('raw-loader!../code/12/rest-es5.example')}
        fontSize="18px"
        spanPadding="5%"
      />
    </CodePaneWrapper>
  </ModSlide>
);
