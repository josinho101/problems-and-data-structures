/**
 * GIven an array of integers and an integer, write a function that moves all
 * instances if that number to the end of the array and runturn the array.
 */

function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (array[left] !== toMove && left < right) {
      left++;
    }

    while (array[right] === toMove && left < right) {
      right--;
    }

    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }

  return array;
}
