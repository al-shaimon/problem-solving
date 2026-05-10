/**
 * Rotate a matrix 90 degrees clockwise
 * Given a 2D matrix, rotate it 90 degrees clockwise in place if possible.
 */

function rotateMatrixClockwise(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

function rotateMatrixLayerByLayer(matrix) {
  const n = matrix.length;

  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    const first = layer;
    const last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i];
      const right = matrix[i][last];
      const bottom = matrix[last][last - offset];
      const left = matrix[last - offset][first];

      matrix[first][i] = left;
      matrix[i][last] = top;
      matrix[last][last - offset] = right;
      matrix[last - offset][first] = bottom;
    }
  }

  return matrix;
}

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotateMatrixClockwise(matrix1));

const matrix2 = [
  [1, 2],
  [3, 4],
];
console.log(rotateMatrixClockwise(matrix2));

module.exports = { rotateMatrixClockwise, rotateMatrixLayerByLayer };
