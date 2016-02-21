import React from 'react';

import Accordion from './accordion.js';
import Chapter from './chapter.js';

const chapters = [
  '02: Input, Processing, and Output',
  '03: Calculations',
  '04: Making Decisions',
  '05: Functions',
  '06: Repetition',
  '07: Data Structures',
  '08: Working with Files',
  '09: Working with External Services',
  '10: Full Programs'
];

export default React.createClass({
  render() {
    let accordions = chapters.map(function(chapter, index) {
      let chapterNum = chapter.substr(0,2);
      return (
        <Accordion key={index} title={chapter}>
          <Chapter num={chapterNum}/>
        </Accordion>
      )
    });

    return (
      <ul>{accordions}</ul>
    )
  }
})
