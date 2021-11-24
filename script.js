let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qntTotalCerveja = cervejaPP(duracao) * adultos
    let qntTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas) 

    resultado.innerHTML = `<p>${qntTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja / 350)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebida / 2000)} Garafas</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
      return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
      return 1600
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
      return 1000
    }
}