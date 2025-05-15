let graphCount = 0;

let objStyle = {
  "bgcolor":'red',
  "border": '1px solid red'
}
let graphBlock = document.querySelector('.graph-block')

function addGraph() {
  graphCount++;
  const container = document.getElementById('graphContainerArea');

  const graphId = `graph${graphCount}`;
  const html = `
  
    <div class="graph-block" id="${graphId}">
     <div>
     <div>
      <label>Max X: <input type="number" class="maxX" /></label>
      <label>Max Y: <input type="number" class="maxY" /></label>
      </div>
      <button class="drbutton" onclick="handleAction('${graphId}')">Draw</button>
     </div>
      <div class="valueInputs" style="display: none;">
        <label>Value X: <input type="number" class="valueX" /></label>
        <label>Value Y: <input type="number" class="valueY" /></label>
      </div>

      <div class="extraButtons" style="display: none;">
        <button onclick="clearMark('${graphId}')">Clear</button>
        <button onclick="resetAll('${graphId}')">Reset</button>
      </div>

      <div class="grid" id="${graphId}-grid"></div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', html);
}

function handleAction(graphId) {
  const graph = document.getElementById(graphId);
  const maxX = parseInt(graph.querySelector('.maxX').value);
  const maxY = parseInt(graph.querySelector('.maxY').value);
  const grid = graph.querySelector('.grid');
  const drawBtn = graph.querySelector('button');

  if (drawBtn.textContent === 'Draw') {
    if (isNaN(maxX) || isNaN(maxY) || maxX < 1 || maxY < 1) {
      alert('Please enter valid Max X and Max Y values.');
      return;
    }

    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${maxX}, 1fr)`;

    for (let y = maxY; y >= 1; y--) {
      for (let x = 1; x <= maxX; x++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.x = x;
        cell.dataset.y = y;
        grid.appendChild(cell);
        cell.style.border = objStyle.border
      }
    }

    graph.querySelector('.valueInputs').style.display = 'inline-block';
    graph.querySelector('.extraButtons').style.display = 'inline-block';
    drawBtn.textContent = 'Mark';

  } else {
    const valueX = parseInt(graph.querySelector('.valueX').value);
    const valueY = parseInt(graph.querySelector('.valueY').value);

    if (isNaN(valueX) || isNaN(valueY)) {
      alert("Please enter valid values for X and Y.");
      return;
    }

    if (valueX > maxX || valueY > maxY || valueX < 1 || valueY < 1) {
      alert("Enter the value which is less than or equal to Max X and Max Y.");
      return;
    }

    const cells = grid.querySelectorAll('.cell');
    cells.forEach(cell => {
      if (parseInt(cell.dataset.x) === valueX && parseInt(cell.dataset.y) === valueY) {
        cell.style.backgroundColor = objStyle.bgcolor;
      }
    });
  }
}

function clearMark(graphId) {
  const graph = document.getElementById(graphId);
  const cells = graph.querySelectorAll('.cell');
  cells.forEach(cell => cell.style.backgroundColor = 'white');
  graph.querySelector('.valueX').value = '';
  graph.querySelector('.valueY').value = '';
}

function resetAll(graphId) {
  const graph = document.getElementById(graphId);
  graph.remove(); // Removes the entire graph block from the DOM
}
graphBlock.style.border = objStyle.border

