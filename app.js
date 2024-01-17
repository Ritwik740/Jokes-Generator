const btn = document.querySelector("button");
const para = document.querySelector("p");
const myURL = "https://official-joke-api.appspot.com/jokes/random";


btn.addEventListener("click",async () =>{
    para.innerText = "Generating a joke just for you....";
    const response = await fetch(myURL);
    const myResponse = await response.json();
    para.innerHTML = `<p><b>Setup : </b> ${myResponse.setup} <br> <b>Punchline : </b>${myResponse.punchline} 😂😂😂😂</p>`;

})