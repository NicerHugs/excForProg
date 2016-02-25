import roundTo from './roundTo.js';
import {padAfter} from './pad.js';

export default function(num) {
  return '$' + padAfter(roundTo(num, 2), '.', 0, 2);
}
