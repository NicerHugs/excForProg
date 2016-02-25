import React from 'react';

import Accordion from './accordion.js';
import Chapter from './chapter.js';

const chapters = [
  {
    title: '02: Input, Processing, and Output',
    exercises: [
      '01: Saying Hello',
      '02: Counting the Number of Characters',
      '03: Printing Quotes',
      '04: Mad Lib',
      '05: Simple Math',
      '06: Retirement Calculator'
    ]
  },
  {title: '03: Calculations',
    exercises: [
      '07: Area of a Room',
      '08: Pizza Party',
      '09: Paint Calculator',
      '10: Self Checkout'
    ]
  },
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
    let chapterEls = chapters.map(function(chapter, index) {
      let chapterNum = chapter.title.substr(0,2);
      return (
        <li key={index}>
          <Chapter key={index} title={chapter.title} num={chapterNum} exercises={chapter.exercises}/>
        </li>
      )
    });

    return (
      <ul className="chapterList">{chapterEls}</ul>
    )
  }
})
