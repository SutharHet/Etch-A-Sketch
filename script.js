const body = document.querySelector('body');

let pixleNo = prompt('How many pixle');
if(pixleNo>100) alert('Pixle size is greater then 100');
const nav = document.createElement('div');
nav.style.width = '500px';
nav.style.height = '50px';
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignContent = 'center';
nav.style.margin = '10px auto'; 
body.appendChild(nav);

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
clearBtn.style.width = '100px';
clearBtn.style.height = '40px';
nav.appendChild(clearBtn);

const defaultBtn = document.createElement('button');
defaultBtn.textContent = 'Default Color';
defaultBtn.style.width = '100px';
defaultBtn.style.height = '40px';
nav.appendChild(defaultBtn);

const colorBtn = document.createElement('button');
colorBtn.textContent = 'select : ';
colorBtn.style.width = '100px';
colorBtn.style.height = '40px';
nav.appendChild(colorBtn);

const colorSelector = document.createElement('input');
colorSelector.type = 'color';
colorSelector.style.width = '20px';
colorSelector.style.height = '20px';
colorSelector.style.borderRadius = '100%';
colorBtn.appendChild(colorSelector);

/*
const pixleBtn = document.createElement('button');
pixleBtn.textContent = 'Change pixle size';
pixleBtn.style.width = '150px';
pixleBtn.style.height = '40px';
nav.appendChild(pixleBtn);
pixleBtn.addEventListener('click', () => {
    //pixleNo = prompt('How much Pixles');    
});
*/
const containerDiv = document.createElement('div');
containerDiv.className = "container";
containerDiv.style.width = '500px';
containerDiv.style.height = '500px';
containerDiv.style.display = 'grid';
containerDiv.style.gridTemplateRows = 'repeat('+pixleNo +', 1fr)';
containerDiv.style.gridTemplateColumns = 'repeat('+pixleNo+', 1fr)';
containerDiv.style.border = '3px solid black';
containerDiv.style.margin = '10px auto';
body.appendChild(containerDiv);


let fillColor = 'Black';
pixleNo *= pixleNo;
for(let i = 0; i < pixleNo; i++) {
    const pixleDiv = document.createElement('div');
    pixleDiv.className = 'pixle';
    //pixleDiv.style.width = '50px';
    //pixleDiv.style.height = '50px';
    //pixleDiv.style.border = '1px solid white';
    containerDiv.appendChild(pixleDiv);
    
    defaultBtn.addEventListener('click', () => {
        fillColor = 'Black';
    });    
    
    colorBtn.addEventListener('click', () => {
            fillColor = colorSelector.value;
    });

    pixleDiv.addEventListener("mouseover", () => {
        pixleDiv.style.backgroundColor = fillColor;
    });

    clearBtn.addEventListener('click', () => {
        pixleDiv.style.backgroundColor = 'white';
    });
}

