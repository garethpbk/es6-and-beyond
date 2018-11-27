import React from 'react';
import { ModSlide, Header, CodeMod, WhiteCodePane, CodePaneWrapper } from './Base';

export default () => (
    <ModSlide bgColor="primary" padding="0px" overflow>
        <Header>generator functions</Header>
        <ul>
            <li>a function that can be "paused" to return something, then resumed</li>
            <li>
                declared with * - <CodeMod>function* myGenerator(){}</CodeMod> or
        <br />
                <CodeMod>function *myGenerator(){}</CodeMod>
            </li>
            <li>
                <CodeMod>yield</CodeMod> keyword returns a value plus if the function is finished
      </li>
            <li>
                <CodeMod>.next()</CodeMod> method resumes the function
      </li>
            <li>
                indicate final return value with normal <CodeMod>return</CodeMod>
            </li>
            <li>
                <CodeMod>async/await</CodeMod> uses generators under the hood
      </li>
        </ul>
        <CodePaneWrapper column>
            <WhiteCodePane
                lang="javascript"
                source={require('raw-loader!../code/24/generator-es6.example')}
                fontSize="18px"
                spanPadding="5%"
            />
            <WhiteCodePane
                lang="javascript"
                source={require('raw-loader!../code/24/generator-es5.example')}
                fontSize="18px"
                spanPadding="5%"
            />
        </CodePaneWrapper>
    </ModSlide>
);
