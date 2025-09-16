'use strict'

class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv
        this.cena = cena
        this.opis = opis
    }
}

let artikli = []

function kreirajRed() {

    let tabela = document.querySelector("#artikli")

    for (let i = 0; i < artikli.length; i++) {
        let tr = document.createElement("tr")
        
        let br = document.createElement("td")
        let naziv = document.createElement("td")
        let cena = document.createElement("td")
        
        br.style.border = '1px solid black'
        naziv.style.border = '1px solid black'
        cena.style.border = '1px solid black'

        br.textContent = i + 1
        naziv.textContent = artikli[i].naziv
        cena.textContent = artikli[i].cena

        tr.appendChild(br)
        tr.appendChild(naziv)
        tr.appendChild(cena)
        tabela.appendChild(tr)
    }
}

function inicijalizujArtikle() {
    artikli = [
        new Artikal('Monitor', 165, 'Velicina: 24/"'),
        new Artikal('Mis', 20, 'Bežični, optički')
    ]
    kreirajRed()
}

document.addEventListener('DOMContentLoaded', inicijalizujArtikle)