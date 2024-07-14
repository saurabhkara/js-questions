// Q. 1 Hollow Rectangle
// ***********
// *         *
// ***********

function hollowRectangle(row, col) {
  let result = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
        result = result + "* ";
      } else {
        result = result + "  ";
      }
    }
    result = result + "\n";
  }

  return result;
}

console.log(hollowRectangle(4, 5));

// Q.2 Inverted Half Pyramid for N=5
// *****
// ****
// ***
// **
// *

function invertedHalfPyramid() {
  let result = "";
  for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result = result + "* ";
    }
    result = result + "\n";
  }
  return result;
}
console.log(invertedHalfPyramid());

// Q.3 Half Pyramid for N=5

//     *
//    **
//   ***
//  ****
// *****

function halfPyramid() {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      if (j <= 5 - i) {
        result = result + "  ";
      } else {
        result = result + "* ";
      }
    }
    result = result + "\n";
  }
  return result;
}

console.log(halfPyramid());

// Q.4 Half Pyramid using Numbers
// 1
// 22
// 333
// 4444
// 55555

function halfPyramidUsingNumber(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      result += i + " ";
    }
    result += "\n";
  }
  return result;
}
console.log(halfPyramidUsingNumber(5));

// Q.5 Flyod's triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function floydTriangle() {
  let count = 1;
  let result = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      result = result + count + " ";
      count++;
    }
    result = result + "\n";
  }
  return result;
}

console.log(floydTriangle());

// Q.6 Print Butterfly pattern for N=3

// *     *
// **   **
// *******
// *******
// **   **
// *     *

function butterFlyPattern(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      result += "* ";
    }
    for (let j = 0; j < 2 * num - 2 * i; j++) {
      result += "  ";
    }
    for (let j = 0; j < i; j++) {
      result += "* ";
    }
    result += "\n";
  }
  for (let i = num; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result += "* ";
    }
    for (let j = 0; j < 2 * num - 2 * i; j++) {
      result += "  ";
    }
    for (let j = 0; j < i; j++) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
}

console.log(butterFlyPattern(3));

// Q. Print Inverted Pattern

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function printInvertedPattern(num) {
  let result = "";
  for (let i = num; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      result += j + " ";
    }
    result += "\n";
  }
  return result;
}

console.log(printInvertedPattern(5));

// Print 0-1 Pattern for N=5

function zeroOnePattern(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      if ((i + j) % 2) {
        result += "0 ";
      } else {
        result += "1 ";
      }
    }
    result += "\n";
  }
  return result;
}

console.log(zeroOnePattern(5));

// Q. Print Rhombus for N=5

function printRhombus(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= 4 - i; j++) {
      result += "  ";
    }
    for (let j = 0; j < num; j++) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
}

console.log(printRhombus(5));
