export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, lowIndex, highIndex, animations) {
  // pivot
  let pivot = array[highIndex];

  // Index of smaller element and
  // indicates the right position
  // of pivot found so far
  let i = lowIndex - 1;

  for (let j = lowIndex; j <= highIndex - 1; j++) {
    // If current element is smaller
    // than the pivot

    animations.push([j, highIndex, true]);
    animations.push([j, highIndex, true]);
    if (array[j] < pivot) {
      // Increment index of
      // smaller element
      i++;
      animations.push([i, array[j], false]);
      animations.push([j, array[i], false]);
      swap(array, i, j);
    }
  }
  animations.push([i + 1, array[highIndex], false]);
  animations.push([highIndex, array[i + 1], false]);
  swap(array, i + 1, highIndex);
  return i + 1;
}

/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(array, lowIndex, highIndex, animations) {
  if (lowIndex < highIndex) {
    // pi is partitioning index, arr[p]
    // is now at right place
    let pi = partition(array, lowIndex, highIndex, animations);

    // Separately sort elements before
    // partition and after partition
    quickSort(array, lowIndex, pi - 1, animations);
    quickSort(array, pi + 1, highIndex, animations);
  }
}
