import React from 'react';

import Accordion from './accordion.js';
import Chapter from './chapter.js';

const chapters = [
  {title: '02: Input, Processing, and Output', exercises: [
    '01: Saying Hello',
    '02: Counting the Number of Characters',
    '03: Printing Quotes',
    '04: Mad Lib',
    '05: Simple Math',
    '06: Retirement Calculator'
  ]},
  {title: '03: Calculations', exercises: []},
  {title: '04: Making Decisions', exercises: []},
  {title: '05: Functions', exercises: []},
  {title: '06: Repetition', exercises: []},
  {title: '07: Data Structures', exercises: []},
  {title: '08: Working with Files', exercises: []},
  {title: '09: Working with External Services', exercises: []},
  {title: '10: Full Programs', exercises: []},
];

export default React.createClass({
  render() {
    let accordions = chapters.map(function(chapter, index) {
      let chapterNum = chapter.title.substr(0,2);
      return (
        <Accordion key={index} title={chapter.title}>
          <Chapter num={chapterNum} exercises={chapter.exercises}/>
        </Accordion>
      )
    });

    return (
      <ul>{accordions}</ul>
    )
  }
})
