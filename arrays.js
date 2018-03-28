var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyCane = "foo";

function addElementToBeginningOfArray(chocolateBars, candyCane){
  return [candyCane, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyCane) {
  chocolateBars.unshift(candyCane);
  return chocolateBars;
}