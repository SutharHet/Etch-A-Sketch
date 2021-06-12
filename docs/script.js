const body = document.querySelector('body');

let pixleNo = prompt('How many pixle');
if(pixleNo>100) alert('Pixle size is greater then 100');
const nav = document.createElement('div');
nav.style.width = '100%';
nav.style.height = '50px';
body.appendChild(nav);

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
clearBtn.style.width = '100px';
clearBtn.style.height = '40px';
nav.appendChild(clearBtn);
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
//containerDiv.style.backgroundColor = 'gray';
body.appendChild(containerDiv);



pixleNo *= pixleNo;
for(let i = 0; i < pixleNo; i++) {
    const pixleDiv = document.createElement('div');
    pixleDiv.style.backgroundColor = 'gray';
    pixleDiv.className = 'pixle';
    //pixleDiv.style.width = '50px';
    //pixleDiv.style.height = '50px';
    //pixleDiv.style.border = '1px solid white';
    containerDiv.appendChild(pixleDiv);
    
    pixleDiv.addEventListener("mouseover", () => {
        pixleDiv.style.backgroundColor = 'Black';
    });
    clearBtn.addEventListener('click', () => {
        pixleDiv.style.backgroundColor = 'gray';
    });
}

