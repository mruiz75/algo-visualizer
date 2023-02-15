export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, array.length, animations);
  return animations;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(mainArray, arrayLength, animations) {
  for (let i = 0; i < arrayLength - 1; i++) {
    for (let j = 0; j < arrayLength - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (mainArray[j] > mainArray[j + 1]) {
        animations.push([j, mainArray[j + 1]]);
        animations.push([j + 1, mainArray[j]]);
        swap(mainArray, j, j + 1);
      } else {
        animations.push([j, mainArray[j]]);
        animations.push([j + 1, mainArray[j + 1]]);
      }
    }
  }
}
