var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(myArr, elem) {
  return [elem, ...myArr]
}

function destructivelyAddElementToBeginningOfArray(myArr, elem) {
  myArr.unshift(elem)
  return myArr
}

