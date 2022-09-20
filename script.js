const containerDiv = document.querySelector('#container');
const button = document.querySelector('#makeGrid');
const resetButton = document.querySelector('#reset');

button.addEventListener('click', makeGridFunction);
resetButton.addEventListener('click', resetGridFunction);

function makeGridFunction() {
    console.log('Making grid');
    for(i = 0; i < 100; i++) {
       let gridDiv = document.createElement('div');
       gridDiv.classList.add('gridDiv');
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
        div.style.backgroundColor = 'lightblue';
    });
}

function changeDivColor () {
    this.style.backgroundColor = 'blue';
}
