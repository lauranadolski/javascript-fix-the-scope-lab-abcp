var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal(inputanimal) {
  var animal = 'cat';
  return animal;
}

function add2(n) {
  var two = 2;
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

var theFunk = funkyFunction()();