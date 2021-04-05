const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

//the user inputs a number
let number = prompt('Ok, agora decida quantos quadrado queres');

//the grid is defined
container.setAttribute('style', `grid-template: repeat(${number}, 1fr) / repeat(${number}, 1fr)`);

//all the divs are created and appended
const m = number*number;
let j = 0;
while(j < m){
    let div = document.createElement("div");
    div.setAttribute("id", `${j}`);
    div.classList.add('color');
    div.setAttribute('style', 'color: blue; padding: 10px'); 
    container.appendChild(div);
    j++;
}

//a random color is given when mouse passes over a div
container.addEventListener("mouseover", function(e){
       e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
});

//all is cleared
function clearDivs(){
    for(let i=0; i<m ; i++){
     const n = document.getElementById(`${i}`);
     n.setAttribute("style", "background-color: aqua");

    }
}

btn.addEventListener("click", clearDivs);


