import { Slide, CodePane, Code } from 'spectacle';
import styled from 'styled-components';

export const ModSlide = styled(Slide)`
  max-height: 100vh !important;

  padding: ${props => (props.padding ? props.padding : '40px')}!important;

  overflow-y: ${props => (props.overflow ? 'scroll' : null)};

  a {
    color: cornflowerblue;
    text-decoration: none;

    &:hover {
      color: seagreen;
      text-decoration: underline;
    }
  }

  ul {
    font-size: 1.75rem;
    text-align: left;

    li {
      padding: 10px 0;
    }
  }
`;

export const Header = styled.h1`
  font-family: 'blade_runner_movie_fontRg';
  font-size: 3.5rem;

  margin: ${props => props.margin};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CodeMod = styled(Code)`
  font-size: 2rem !important;
`;

export const CodePaneWrapper = styled.div`
  display: flex;
`;

export const WhiteCodePane = styled(CodePane)`
  flex-basis: 50%;

  color: white !important;
  font-size: ${props => props.fontSize} !important;

  min-width: auto !important;
  max-width: auto !important;

  margin: 0 5px !important;

  pre {
    padding: ${props => props.spanPadding} !important;
    span {
      color: cornflowerblue !important;
    }
  }
`;
