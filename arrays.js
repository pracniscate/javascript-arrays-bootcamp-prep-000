var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyCane = "foo";

function addElementToBeginningOfArray(chocolateBars, candyCane) {
  return [candyCane, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyCane) {
  chocolateBars.unshift(candyCane);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candyCane) {
  return [...chocolateBars, candyCane];
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyCane) {
  chocolateBars.push(candyCane);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.slice(0, chocolateBars.lenght - 1)
  return chocolateBars;
}