let isGridDrawn = false;

function handleAction() {
  if (!isGridDrawn) {
    drawGrid();
  } else {
    markCell();
  }
}

function drawGrid() {
  const maxX = parseInt(document.getElementById('maxX').value);
  const maxY = parseInt(document.getElementById('maxY').value);
  const grid = document.getElementById('gridContainer');
  const valueInputs = document.getElementById('valueInputs');
  const button = document.getElementById('actionButton');

  if (isNaN(maxX) || isNaN(maxY) || maxX < 1 || maxY < 1) {
    alert('Please enter valid Max X and Max Y values.');
    return;
  }

  valueInputs.style.display = 'inline-block';
  button.textContent = 'Mark';
  isGridDrawn = true;

  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${maxX}, 50px)`;

  for (let y = maxY; y >= 1; y--) {
    for (let x = 1; x <= maxX; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.x = x;
      cell.dataset.y = y;
      grid.appendChild(cell);
    }
  }
}


function markCell() {
    const valueX = parseInt(document.getElementById('ValueX').value);
    const valueY = parseInt(document.getElementById('ValueY').value);
  
    const cells = document.querySelectorAll('.cell');
  
    cells.forEach(cell => {
      const x = parseInt(cell.getAttribute('data-x'));
      const y = parseInt(cell.getAttribute('data-y'));
  
      if (x === valueX && y === valueY) {
        cell.style.backgroundColor = 'red';
      }
    });
    if(!cellFound){
        alert('Cell not found')
    }
  }
  
// function markCell() {
//     // Get the X and Y input elements
//     const inputX = document.getElementById('ValueX');
//     const inputY = document.getElementById('ValueY');
  
//     // Get the values and convert them to numbers
//     const valueX = parseInt(inputX.value);
//     const valueY = parseInt(inputY.value);
  
//     // Check if the inputs are valid numbers
//     if (isNaN(valueX) || isNaN(valueY)) {
//       alert('Please enter valid numbers for X and Y.');
//       return;
//     }
  
//     // Construct the selector string
//     const selector = `.cell[data-x="${valueX}"][data-y="${valueY}"]`;
  
//     // Find the cell element using the selector
//     const cell = document.querySelector(selector);
  
//     // Check if the cell exists
//     if (cell) {
//       // Change the background color to red
//       cell.style.backgroundColor = 'red';
//     } else {
//       alert('Cell not found. Please enter valid coordinates.');
//     }
//   }
  

function clearMark(){
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
  document.getElementById('ValueX').value = '';
  document.getElementById('ValueY').value = '';
}

// function resetAll(){
//     isGridDrawn = false;

//  document.getElementById('maxX').value = '';
//  document.getElementById('maxY').value = '';
//  document.getElementById('valueX').value = '';
//  document.getElementById('ValueX').value = '';
//  document.getElementById('ValueY').value = '';

//  document.getElementById('valueInputs').style.display = 'none';

//  document.getElementById('actionButton').textContent = 'Draw';

//  document.getElementById('gridContainer').innerHTML ='';
// }

function resetAll(){
  isGridDrawn = false;

  document.getElementById('maxX').value = '';
  document.getElementById('maxY').value = '';
  document.getElementById('ValueX').value = '',
  document.getElementById('ValueY').value = '';

  document.getElementById('valueInputs').style.display = 'none';
  document.getElementById('extraButton').style.display = 'none';

  document.getElementById('actionButton').textContent = 'Draw';

  const grid = document.getElementById('gridContainer');
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = '';
  
}

