const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const btn = document.getElementById("btn");

fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
}).then(data => {
    // console.log(data); 
    const adviceObject = data.slip;
    console.log(adviceObject);
    console.log(adviceObject.id);
    console.log(adviceObject.advice);
    adviceId.innerHTML = `<p>Advice #${adviceObject.id}</p>`
    adviceText.innerHTML = `<p>"${adviceObject.advice}"</p>`
}).catch(error => {
    console.log(error);
})