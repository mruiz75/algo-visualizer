import React, { useState } from "react";
import { getMergeSortAnimations } from "../../algorithms/sorting/mergeSort";
import "./Sorting.css";
import { getBubbleSortAnimations } from "../../algorithms/sorting/bubbleSort";
import { getSelectionSortAnimations } from "../../algorithms/sorting/selectionSort";
import { getInsertionSortAnimations } from "../../algorithms/sorting/insertionSort";
import { getQuickSortAnimations } from "../../algorithms/sorting/quickSort";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [arrayCreated, setArrayCreated] = useState(false);

  function resetArray() {
    setArrayCreated(true);
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(randomIntFromInterval(5, 600));
    }
    setArray(newArray);
  }

  function mergeSort() {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  }

  function bubbleSort() {
    const animations = getBubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 !== 2 && i % 4 !== 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  }

  function selectionSort() {
    const animations = getSelectionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  }

  function insertionSort() {
    const animations = getInsertionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  }

  function quickSort() {
    const animations = getQuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  }

  return (
    <div className="array-container">
      <div class="button-section">
        <button class="btn" onClick={() => resetArray()}>
          Generate New Array
        </button>
        <button
          class="btn"
          disabled={!arrayCreated}
          onClick={() => mergeSort()}
        >
          Merge Sort
        </button>
        <button
          class="btn"
          disabled={!arrayCreated}
          onClick={() => bubbleSort()}
        >
          Bubble Sort
        </button>
        <button
          class="btn"
          disabled={!arrayCreated}
          onClick={() => selectionSort()}
        >
          Selection Sort
        </button>
        <button
          class="btn"
          disabled={!arrayCreated}
          onClick={() => insertionSort()}
        >
          Insertion Sort
        </button>
        <button
          class="btn"
          disabled={!arrayCreated}
          onClick={() => quickSort()}
        >
          Quick Sort
        </button>
      </div>
      <div className="bar-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: "turquoise",
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }

export default SortingVisualizer;
