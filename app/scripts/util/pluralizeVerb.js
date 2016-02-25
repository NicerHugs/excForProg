const irregulars = {
  is: 'are',
  does: 'do',
  has: 'have',
  fishes: 'fish'
}

export default function(str) {
  if (irregulars[str]) return irregulars[str];
  if (str.match(/s$/).length) {
    return str.replace(/s$/, '');
  } else {
    return str;
  }
};
