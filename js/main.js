let serial = 0;
// this function For Area(A) = {0.5 * b* h}

function getAreaOfThreeMultiply(e){
    serial +=1;
    const formulaTitle = e.target.parentNode.parentNode.children[0].innerText;
    const formulaFristInputElement = e.target.parentNode.parentNode.children[2].children[0];
    const formulaSecoundInputElement =e.target.parentNode.parentNode.children[2].children[1];
    const formulaFristInput = formulaFristInputElement.value;
    const formulaSecoundInput = formulaSecoundInputElement.value;
    formulaFristInputElement.value = ''
    formulaSecoundInputElement.value = ''
    // formula = Area(A) = 0.5*b*h
    parseFloat(formulaFristInput);
    parseFloat(formulaSecoundInput);
    
    if(formulaFristInput >= 0.1 && formulaSecoundInput >= 0.1)  {
        const Area = 0.5 * formulaFristInput * formulaSecoundInput; 
       displayData(formulaTitle, Area.toFixed(2));
       

    }
    else{
        alert('Hello Sir. Please Filed The Input Fill with NumberType data. otherWays My UniqueCoder Will Be Stop. ')
    }
}

// This is Function Formula : Area(A) = {b*h} or {w*i}
function getAreaOfTwoMultiply(e){
    serial +=1;
    const formulaTitle = e.target.parentNode.parentNode.children[0].innerText;
    const formulaFristInputElement = e.target.parentNode.parentNode.children[2].children[0];
    const formulaSecoundInputElement =e.target.parentNode.parentNode.children[2].children[1];
    const formulaFristInput = formulaFristInputElement.value;
    const formulaSecoundInput = formulaSecoundInputElement.value;
    formulaFristInputElement.value = ''
    formulaSecoundInputElement.value = ''
    // formula = Area(A) = b*h
    parseFloat(formulaFristInput);
    parseFloat(formulaSecoundInput);
    if(formulaFristInput >= 0.1 && formulaSecoundInput >= 0.1)  {
        const Area =formulaFristInput * formulaSecoundInput; 
       displayData(formulaTitle, Area.toFixed(2));
       

    }
    else{
        alert('Hello Sir. Please Filed The Input Fill with NumberType data. otherWays My UniqueCoder Will Be Stop. ')
    }
}

function ellipse(e){
    serial +=1;
    const formulaTitle = e.target.parentNode.parentNode.children[0].innerText;
    const formulaFristInputElement = e.target.parentNode.parentNode.children[2].children[0];
    const formulaSecoundInputElement =e.target.parentNode.parentNode.children[2].children[1];
    const formulaFristInput = formulaFristInputElement.value;
    const formulaSecoundInput = formulaSecoundInputElement.value;
    formulaFristInputElement.value = ''
    formulaSecoundInputElement.value = ''
    // formula = Area(A) = 3.1415* b*h
    parseFloat(formulaFristInput);
    parseFloat(formulaSecoundInput);
    if(formulaFristInput >= 0.1 && formulaSecoundInput >= 0.1)  {
        const Area =3.14* formulaFristInput * formulaSecoundInput; 
       displayData(formulaTitle, Area.toFixed(2));
       

    }
    else{
        alert('Hello Sir. Please Filed The Input Fill with NumberType data. otherWays My UniqueCoder Will Be Stop. ')
    
}
}

// random Colour Function
function randomColour(id){
    const colorButton = document.getElementById(id);
    colorButton.addEventListener('mouseenter',function(){

    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorButton.style.backgroundColor = color;
    });

    colorButton.addEventListener('mouseleave', function() {
    colorButton.style.backgroundColor = 'white';
    });
}
// // called random colur function to set colour
randomColour('triangle-card');
randomColour('rectangle-card');
randomColour('parallelogram-card');
randomColour('rhombus-card');
randomColour('pentagon-card')
randomColour('ellipse-card');
    
// similar formula create and function Called 
document.getElementById('triangle-btn').addEventListener('click', getAreaOfThreeMultiply);
document.getElementById('rhombus-btn').addEventListener('click', getAreaOfThreeMultiply);
document.getElementById('pentagon-btn').addEventListener('click', getAreaOfThreeMultiply);

// similar formula crate and function Called
document.getElementById('parallelogram-btn').addEventListener('click', getAreaOfTwoMultiply);
document.getElementById('rectangle-btn').addEventListener('click', getAreaOfTwoMultiply);

// elipise function Called

document.getElementById('ellipse-btn').addEventListener('click', ellipse);

function displayData(pN,totalArea){
    const container = document.getElementById('table-container');
   
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${pN}</td>
        <td>${totalArea +' C&#13217;'}</td>        
        <td><button class="btn bg-cyan-500 pl-1 pr-1">Convert to &#13217;</button></td>        

        
    `;
    container.appendChild(tr);
}
