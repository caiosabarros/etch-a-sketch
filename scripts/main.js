//steps to create this project ()=optional, more advanced:
const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

let number = prompt('Ok, agora decida quantos quadrado queres');
//create a grid (with changeble size) begginging at 16x16 using divs
//create divs first:
//change the property of the divs template-grid
container.setAttribute('style', `grid-template: repeat(${number}, 1fr) / repeat(${number}, 1fr)`);

const m = number*number;


let j = 0;
while(j < m){
    let div = document.createElement("div");
    div.setAttribute("id", `${j}`);
    div.classList.add('color');
    //div.textContent = `${j}`;
    div.setAttribute('style', 'color: blue; padding: 10px'); 
    container.appendChild(div);
    j++;
}


//let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

container.addEventListener("mouseover", function(e){
       e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
});

function clearDivs(){
    for(let i=0; i<m ; i++){
     const n = document.getElementById(`${i}`);
     n.setAttribute("style", "background-color: aqua");

    }
}

btn.addEventListener("click", clearDivs);


/*let div1 = document.createElement("div");
div1.setAttribute("id", "1");
div1.classList.add('color');
container.appendChild(div1);

let div2 = document.createElement("div");
div2.setAttribute("id", "2");
div2.classList.add('color');
container.appendChild(div2);


let div3 = document.createElement("div");
div3.setAttribute("id", "3");
div3.classList.add('color');
container.appendChild(div3);


let div4 = document.createElement("div");
div4.setAttribute("id", "4");
div4.classList.add('color');
container.appendChild(div4);

    
let div5 = document.createElement("div");
div5.setAttribute("id", "5");
div5.classList.add('color');
container.appendChild(div5);


let div6 = document.createElement("div");
div6.setAttribute("id", "6");
div6.classList.add('color');
container.appendChild(div6);


let div7 = document.createElement("div");
div7.setAttribute("id", "7");
div7.classList.add('color');
container.appendChild(div7);


let div8 = document.createElement("div");
div8.setAttribute("id", "8");
div8.classList.add('color');
container.appendChild(div8);


let div9 = document.createElement("div");
div9.setAttribute("id", "9");
div9.classList.add('color');
container.appendChild(div9);


let div10 = document.createElement("div");
div10.setAttribute("id", "10");
div10.classList.add('color');
container.appendChild(div10);


let div11 = document.createElement("div");
div11.setAttribute("id", "11");
div11.classList.add('color');
container.appendChild(div11);


let div12 = document.createElement("div");
div12.setAttribute("id", "12");
div12.classList.add('color');
container.appendChild(div12);


let div13 = document.createElement("div");
div13.setAttribute("id", "13");
div13.classList.add('color');
container.appendChild(div13);


let div14 = document.createElement("div");
div14.setAttribute("id", "14");
div14.classList.add('color');
container.appendChild(div14);


let div15 = document.createElement("div");
div15.setAttribute("id", "15");
div15.classList.add('color');
container.appendChild(div15);


let div16 = document.createElement("div");
div16.setAttribute("id", "16");
div16.classList.add('color');
container.appendChild(div16);*/






//lines between squares in the grid



//change its coloro to when hovering over a specific grid (may be Bootrsap or query will help here)




//create a button that cleans everything





//Add a button to the top of the screen which will clear the current grid and send the user a popup 
//asking for how many squares per side to make the new grid. Once entered the new grid should be generated
// in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad. Tip:
// / Set the limit for the user input to a maximum of 100. 