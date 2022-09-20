const containerDiv = document.querySelector('#container');
const button = document.querySelector('#makeGrid');
const resetButton = document.querySelector('#reset');

button.addEventListener('click', makeGridFunction);
resetButton.addEventListener('click', resetGridFunction);

function makeGridFunction() {

    while (containerDiv.lastElementChild) {
        containerDiv.removeChild(containerDiv.lastElementChild);
    }

    console.log('Making grid');

    containerDiv.classList.add('border');

    let gridSize = prompt('Enter the grid size (max 100)');
    if (gridSize > 100) {
        gridSize = 100;
        alert('Grid size too large. Reduced to maximum.');
    }

    for(i = 0; i < (gridSize ** 2); i++) {
       let gridDiv = document.createElement('div');
       gridDiv.classList.add('gridDiv');
       gridDiv.style.width = (100/gridSize) + '%';
       gridDiv.style.height = (100/gridSize) + '%';
       gridDiv.style.opacity = 1;
       containerDiv.appendChild(gridDiv);
    }

    let gridNodeList = document.querySelectorAll('.gridDiv');
    gridNodeList.forEach(div => {
        div.addEventListener('mouseover', changeDivColor)
    });
}

function resetGridFunction () {
    let gridNodeList = document.querySelectorAll('.gridDiv');
    gridNodeList.forEach(div => {
        div.style.backgroundColor = 'rgba(255,255,255)';
    });
}

function changeDivColor () {
    let opacityValue = parseFloat(this.style.opacity);
    console.log(opacityValue + 2137);
    if (opacityValue === 1) {
        this.style.opacity = 0.1;
        this.style.backgroundColor = 'rgb(' + randomRGBColor() + ',' + randomRGBColor() + ',' + randomRGBColor() + ')';
    } else {
        this.style.opacity = (opacityValue + 0.1);
    }
    return;
}

function randomRGBColor () {
    let randomColor = Math.ceil(Math.random()*255);
    return randomColor;
}
