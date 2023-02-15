export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSort(array, array.length, animations);
  return animations;
}

function insertionSort(mainArray, arrayLength, animations) {
  for (let i = 1; i < arrayLength; i++) {
    let key = mainArray[i];
    let j = i - 1;
    animations.push([j, i, true]);
    animations.push([j, i, true]);

    while (j >= 0 && mainArray[j] > key) {
      animations.push([j, key, false]);
      animations.push([j + 1, mainArray[j], false]);
      mainArray[j + 1] = mainArray[j];
      j = j - 1;
    }
    mainArray[j + 1] = key;
  }
}
