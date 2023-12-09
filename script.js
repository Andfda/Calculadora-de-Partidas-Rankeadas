
function calcular(){
    let winner = document.getElementById("qtdVitoria")
    winner = Number(winner.value)
    let loser = document.getElementById("qtdDerrota")
    loser = Number(loser.value)
    let res = document.getElementById("res")
    let saldoVitorias = Number(winner - loser)   

    if (saldoVitorias <= 10){
        res.innerHTML = `<p> O Herói tem Saldo de ${saldoVitorias} e está no nível Ferro <p/>`
    }else if (saldoVitorias <= 20){
        res.innerHTML = `<p> O Herói tem Saldo de ${saldoVitorias} e está no nível Bronze <p/>`
    }else if (saldoVitorias <= 50){
        res.innerHTML = `<p> O Herói tem Saldo de ${saldoVitorias} e está no nível Prata <p/>`
    }else if (saldoVitorias <= 80){
        res.innerHTML = `<p> O Herói tem Saldo de ${saldoVitorias} e está no nível Ouro <p/>`
    }else if (saldoVitorias <= 90 ){
        res.innerHTML = `<p> O Herói tem Saldo de ${saldoVitorias} e está no nível Diamante <p/>`
    }else if (saldoVitorias <= 100){
        res.innerHTML = `<p> O Herói tem Saldo de ${saldoVitorias} e está no nível Lendário <p/>`
    }else {
        res.innerHTML = `<p> O Herói tem Saldo de ${saldoVitorias} e está no nível imortal <p/>`
    }
   
}