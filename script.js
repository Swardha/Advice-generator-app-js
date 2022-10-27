// initialising variables
const paragraph = document.querySelector('#ad-para');
const button = document.querySelector("#img-dice");
const heading = document.querySelector('.head');
// url for advice generator
const url="https://api.adviceslip.com/advice";

// adding event to button
let getAdvice = ()=>{
    fetch(url)
    .then(res=> res.json())
    .then((data)=>{
        console.log(data);
        console.log(data.slip.id);
        heading.innerHTML = `<h1 class="head">
        Advice # ${data.slip.id}</h1>`;
        paragraph.innerText = `"${data.slip.advice}"`;

    })
}

window.addEventListener('load', getAdvice);
button.addEventListener('click', getAdvice);
