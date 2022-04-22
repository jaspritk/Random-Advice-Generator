const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const btn = document.getElementById("btn");

function newData() {

    btn.disabled = true;
    setTimeout(() => {
        fetch('https://api.adviceslip.com/advice').then(response => {
            return response.json();
        }).then(data => {
            const adviceObject = data.slip;
            console.log(adviceObject);
            console.log(adviceObject.id);
            console.log(adviceObject.advice);
            adviceId.innerHTML = `<p>Advice #${adviceObject.id}</p>`
            adviceText.innerHTML = `<p>"${adviceObject.advice}"</p>`
        }).catch(error => {
            console.log(error);
        })
        btn.disabled = false;
    }, 500)
}
