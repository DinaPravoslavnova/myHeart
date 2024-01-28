const matrix = [
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
  [1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 1],
  [1, 0, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 1],
  [0, 1, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 1, 0],
  [0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
];

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Show image';
document.body.append(button);

function displayEmptyMatrix() {
  const container = document.querySelector('.container');

  matrix.forEach((row) => {
    const rowDiv = document.createElement('div');

    row.forEach(() => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      rowDiv.append(cellDiv);
    });

    container.append(rowDiv);
  });
}

displayEmptyMatrix();

function fillMatrix() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell, index) => {
    setTimeout(() => {
      const row = index % matrix.length;
      const col = Math.floor(index / matrix.length);
      const value = matrix[row][col];
      if (value === 1) {
        cell.style.backgroundColor = 'red';
      } else if (value === 2) {
        cell.style.backgroundColor = 'blue';
      }
    }, index * 20);
  });
}

button.addEventListener('click', function () {
  fillMatrix();
});
