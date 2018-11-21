import React from 'react';
import { ModSlide, Header } from './Base';

export default () => (
  <ModSlide transition={['zoom']} bgColor="primary">
    <Header textColor="secondary" margin="25px 0">
      a brief history of javascript
    </Header>
    <ul>
      <li>
        <strong>1995</strong> — Brendan Eich creates JS in 10 days
      </li>
      <li>
        <strong>1997</strong> — ECMA takes over JS; standardizes as ECMAScript (ES1)
      </li>
      <li>
        <strong>1998</strong> — ES2 released - editorial changes for standards
      </li>
      <li>
        <strong>1999</strong> — ES3 released - "modern JS" - regex, try/catch, etc
      </li>
      <li>
        <strong>2005</strong> — AJAX conceived of by Jesse James Garrett
      </li>
      <li>
        <strong>2006</strong> — jQuery created and released by John Resig
      </li>
      <li>
        <strong>2007</strong> — ES3.1/ES4 split because drama; ES4 abandoned
      </li>
      <li>
        <strong>2009</strong> — ES3.1 renamed ES5 and released
      </li>
      <li>
        <strong>2015</strong> — ES6 finalized and released
      </li>
      <li>
        <strong>2016</strong> — ES7
      </li>
      <li>
        <strong>2017</strong> — ES8
      </li>
      <li>
        <strong>2018</strong> — ES9
      </li>
      <li>
        <strong>~ the future ~ </strong> — ES.Next
      </li>
    </ul>
  </ModSlide>
);
