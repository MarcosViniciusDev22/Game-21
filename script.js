let soma = 0;
let somaTotal =document.getElementById("somaTotal")
let btn = document.getElementById("btnAdicionar");
let btnRefresh = document.getElementById("btnRefresh")

btn.addEventListener('click', newLine);
btnRefresh.addEventListener('click', () => {window.location.reload()});

function newLine(){
    const num = parseInt(Math.random() * (21) + 1);
    const linhaNova = document.createElement('tr');
    linhaNova.innerHTML = `<td>${num}<td>`;
    soma += num;
    somaTotal.innerHTML = `Soma: ${soma}`;
    document.querySelector('#table1').appendChild(linhaNova);

    if(soma === 21){
        alert("voce ganhou")
        btn.disabled = true;
        btn.style.display = "none";
        btnRefresh.style.display = "block";
    }else if(soma > 21){
        alert("voce perdeu")
        btn.disabled = true;
        btn.style.display = "none";
        btnRefresh.style.display = "block";
    }
}  

btnRefresh.style.display ="none";