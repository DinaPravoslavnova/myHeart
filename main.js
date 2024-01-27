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

function displayEmptyMatrix() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  matrix.forEach((row) => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    row.forEach(() => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      rowDiv.appendChild(cellDiv);
    });

    container.appendChild(rowDiv);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);

  displayEmptyMatrix();
});

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
    }, index * 30);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Show image';
  button.addEventListener('click', function () {
    fillMatrix();
  });
  document.body.appendChild(button);
});
