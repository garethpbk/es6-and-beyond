// Import React
import React from 'react';

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import Slides
import SlideOne from '../slides/01';
import SlideTwo from '../slides/02';
import SlideThree from '../slides/03';
import SlideFour from '../slides/04';
import SlideFive from '../slides/05';
import SlideSix from '../slides/06';
import SlideSeven from '../slides/07';
import SlideEight from '../slides/08';
import SlideNine from '../slides/09';
import SlideTen from '../slides/10';
import SlideEleven from '../slides/11';
import SlideTwelve from '../slides/12';
import SlideThirteen from '../slides/13';
import SlideFourteen from '../slides/14';
import SlideFifteen from '../slides/15';
import SlideSixteen from '../slides/16';
import SlideSeventeen from '../slides/17';
import SlideEighteen from '../slides/18';
import SlideNineteen from '../slides/19';
import SlideTwenty from '../slides/20';
import SlideTwentyOne from '../slides/21';
import SlideTwentyTwo from '../slides/22';
import SlideTwentyThree from '../slides/23';
import SlideTwentyFour from '../slides/24';
import SlideTwentyFive from '../slides/25';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
        <SlideFour />
        <SlideFive />
        <SlideSix />
        <SlideSeven />
        <SlideEight />
        <SlideNine />
        <SlideTen />
        <SlideEleven />
        <SlideTwelve />
        <SlideThirteen />
        <SlideFourteen />
        <SlideFifteen />
        <SlideSixteen />
        <SlideSeventeen />
        <SlideEighteen />
        <SlideNineteen />
        <SlideTwenty />
        <SlideTwentyOne />
        <SlideTwentyTwo />
        <SlideTwentyThree />
        <SlideTwentyFour />
        <SlideTwentyFive />
      </Deck>
    );
  }
}
