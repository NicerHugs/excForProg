const irregulars = {
  person: 'people',
  he: 'they',
  she: 'they',
  I: 'we',
  you: 'you',
  fish: 'fish',
  hippopotamus: 'hippopotami'
}
export default function(str) {
  if (irregulars[str]) return irregulars[str];
  if (str.match(/s$|sh$/)) return str + 'es';
  else return str + 's';
};
