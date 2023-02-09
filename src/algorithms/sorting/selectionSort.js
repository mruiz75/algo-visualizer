export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSort(array, array.length, animations);
  return animations;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(mainArray, arrayLength, animations) {
  for (let i = 0; i < arrayLength - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrayLength; j++) {
      animations.push([j, minIndex, true]);
      animations.push([j, minIndex, true]);
      if (mainArray[j] < mainArray[minIndex]) {
        minIndex = j;
      }
    }
    animations.push([i, mainArray[minIndex], false]);
    animations.push([minIndex, mainArray[i], false]);
    swap(mainArray, minIndex, i);
  }
}
