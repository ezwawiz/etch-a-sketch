const REGULAR = 'black';
let RAINBOW = '#' + Math.floor(Math.random()*16777215).toString(16);
let SHADER = 'grey';

const container = document.querySelector('#container');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'btn-regular') {
            createGrid(16, REGULAR) 
         } else if (button.id == 'btn-rainbow') {
             createGrid(16, RAINBOW); 
         } else if (button.id == 'btn-shader') {
            createGrid(16, SHADER) 
         }  
    })
});

function reset() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function createGrid(size, colour) {
    reset();

    for(i=0;i<size;i++) {
        const row = document.createElement('div');
        row.style.display = 'inline-block';
        container.appendChild(row);

    for(j=0; j<size;j++) {
        const column = document.createElement('div');
        column.classList.add('box');
        column.style.width = `${500 / size}px`;
        column.style.height = `${500 / size}px`;
        column.style.flex = '1 0 auto';
        column.style.border = '1px solid black';
        column.style.margin = '-1px -1px 0 0';
        column.addEventListener('mouseover', () => {
            if (colour == RAINBOW) {
                column.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            } else if (colour == SHADER) {
                column.style.backgroundColor = colour;
            } else {
                column.style.backgroundColor = colour;
            }

        });
        row.appendChild(column);
    }
}
};

