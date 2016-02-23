import roundTo from './roundTo.js';

export default function(squareFeet) {
  const converstionFactor = 0.09290304;
  const metric = Number(squareFeet) * converstionFactor;
  return roundTo(metric, 3); 
}
