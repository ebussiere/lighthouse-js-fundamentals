const ageCalculator = function (name, yearOfBirth, CurrentYear) {
  let phrase = '';
  let ageResult = CurrentYear - yearOfBirth;
  phrase = name + ' is ' + ageResult + ' years old.';
  return phrase;
};
console.log(ageCalculator('Miranda', 1983, 2015));
console.log(ageCalculator('Ferdinand', 1988, 2015));
