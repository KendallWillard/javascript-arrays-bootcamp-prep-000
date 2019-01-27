var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(myArr, elem) {
  return [elem, ...myArr]
}

function destructivelyAddElementToBeginningOfArray(myArr, elem) {
  myArr.unshift(elem)
  return myArr
}

function addElementToEndOfArray(myArr, elem) {
  return [...myArr, elem]
}

function destructivelyAddElementToEndOfArray(myArr, elem) {
  myArr.push(elem) 
  return myArr
}

function accessElementInArray(myArr, ndx) {
  return myArr[ndx] 
}