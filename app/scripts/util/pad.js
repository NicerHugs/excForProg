export function padBefore(value, beforeWhat, withWhat, untilHowMany) {
  var toAdd;
  var str = value.toString();
  if (beforeWhat !== '' && beforeWhat !== false) {
    str = str.indexOf(beforeWhat) > -1 ? str : beforeWhat + str;
    toAdd = untilHowMany-str.indexOf(beforeWhat);
  } else {
    toAdd = untilHowMany - str.length;
  }
  if (toAdd > 0) {
    for (var i = 0; i < toAdd; i++) {
      str = withWhat + str;
    }
  } else {
    str = str.substr(toAdd*-1, str.length);
  }
  return str;
};

export function padAfter(value, afterWhat, withWhat, untilHowMany) {
  var toAdd;
  var str = value.toString();
  if (afterWhat !== '' && afterWhat !== false) {
    str = str.indexOf(afterWhat) > -1 ? str: str + afterWhat;
    toAdd = untilHowMany-(str.length-1-str.indexOf(afterWhat));
  } else {
    toAdd = untilHowMany - str.length;
  }
  if (toAdd > 0) {
    for (var i = 0; i < toAdd; i++) {
      str = str + withWhat;
    }
  } else {
    str = str.substr(0, str.length+toAdd)
  }
  return str;
};

console.assert(padAfter(4, '.', 0, 2) === '4.00', '4.00')
console.assert(padAfter(4.2, '.', 'f', 2) === '4.2f', '4.2f')
console.assert(padAfter(4.938495, '.', 0, 5) === '4.93849', '4.93849')
console.assert(padAfter(45, '', 0, 5) === '45000', '45000')
console.assert(padAfter(498238495, false, 0, 5) === '49823', '49823')

console.assert(padBefore(4, '', 0, 2) === '04', '04')
console.assert(padBefore(4, false, 0, 5) === '00004', '00004')
console.assert(padBefore(4, '.', 0, 2) === '00.4', '00.4')
console.assert(padBefore(12.4, '.', 0, 3) === '012.4', '012.4')
console.assert(padBefore(12.4, '.', 0, 2) === '12.4', '12.4')
console.assert(padBefore(122343.84, '.', 0, 4) === '2343.84', '2343.84')
