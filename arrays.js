var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElemenetToBeginningOfArray(myArr, elem) {
  var result = [elem, ...myArr]
  return result
}

