import { Slide, CodePane, Code } from 'spectacle';
import styled from 'styled-components';

export const ModSlide = styled(Slide)`
  max-height: 100vh !important;

  padding: ${props => (props.padding ? props.padding : '40px')}!important;

  overflow-y: ${props => (props.overflow ? 'scroll' : null)};

  a {
    color: #56cbff;
    text-decoration: none;

    display: inline-block;

    &:hover {
      color: seagreen;
      text-decoration: underline;
    }

    &.big {
      font-weight: 800;

      margin: 50px 0;
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
  //font-family: 'blade_runner_movie_fontRg';
  font-size: 3.5rem;
  text-transform: uppercase;

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
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

export const WhiteCodePane = styled(CodePane)`
  flex-basis: 50%;

  color: white !important;
  font-size: ${props => props.fontSize} !important;

  min-width: auto !important;
  max-width: 1200px !important;

  margin: 5px !important;

  pre {
    padding: ${props => props.spanPadding} !important;
    span {
      color: #56cbff !important;
    }
  }
`;

export const Social = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 200px;
  }

  img {
    width: 75px;

    margin: 0 25px;
  }
`;
