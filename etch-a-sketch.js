const container = document.querySelector('#container');

for(i=0;i<=16;i++) {
    const row = document.createElement('div');
    // row.style.width = '20px';
    // row.style.height = '20px';
    // row.style.flex = '0 0 auto';
    // row.style.border = '2px solid black';
    row.style.display = 'inline-block';
    container.appendChild(row);
    // createBox();


    for(j=0; j<=16;j++) {
        const column = document.createElement('div');
        column.classList.add('box');
        column.style.width = '20px';
        column.style.height = '20px';
        column.style.flex = '0 0 auto';
        column.style.border = '1px solid black';
        column.style.margin = '-1px -1px 0 0';
        column.addEventListener('mouseover', () => {
            column.style.backgroundColor = 'black';
        })
        row.appendChild(column);

        // createBox();

        // if (j == 16) {
        //     // const next = document.createElement('br');
        //     // container.appendChild(next);
        //     box.style.float = 'right'; 
            
        // }
    }
}


function createBox() {
    const box = document.createElement('div');
    // box.style.margin = 0;
    // box.style.padding = 0;
    box.style.width = '20px';
    box.style.height = '20px';
    box.style.flex = '0 0 auto';
    box.style.border = '2px solid black';
    container.appendChild(box);
};

// container.addEventListener('mouseover', () => {
//     var item = document.getElementsByClassName('box');
//     item.style.backgroundColor = 'pink';
// });

// const box = document.createElement('div');
// box.style.width = '100px';
// box.style.height = '100px';
// box.style.backgroundColor = 'pink';
// container.appendChild(box);

// function test() {
//   const container = document.querySelector("#container");

//     let box = document.createElement("div");
//     box.classList.add = "box";
//     box.style.width = "100px";
//     body.style.height = "100px";
//     box.style.border = "4px solid black";
//     box.style.backgroundColor = 'pink';

//     container.appendChild(box);

// }

// test();
