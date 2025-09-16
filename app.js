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
    tabela.innerHTML = ""

    for (let i = 0; i < artikli.length; i++) {
        let tr = document.createElement("tr")

        tr.addEventListener('click', function () {
            prikazDetalja(artikli[i])
        })


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
function prikazDetalja(artikal) {
    document.querySelector("#detaljNaziv").textContent = "Naziv: " + artikal.naziv
    document.querySelector("#detaljCena").textContent = "Cena: " + artikal.cena + "$"
    document.querySelector("#detaljOpis").textContent = "Opis: " + artikal.opis
}

function popunjavanjeForme() {
    let submitBtn = document.querySelector('#submitBtn')
    submitBtn.addEventListener('click', function () { 
        const forma = document.querySelector('#formaZaDodavanje')
        const formData = new FormData(forma) 
        const naziv = formData.get('naziv')
        const cena = formData.get('cena')
        const opis = formData.get('opis')

        const noviArtikal = new Artikal(naziv, cena, opis)
        artikli.push(noviArtikal)

        kreirajRed()
    })
}


function inicijalizujArtikle() {
    artikli = [
        new Artikal('Monitor', 165, '23.8" IPS ekran sa širokim uglovima gledanja (178°)'),
        new Artikal('Mis', 20, 'Bežični, optički'),
        new Artikal("TV", 650, "Rezolucija: 4K Ultra HD 3840 x 2160p")
    ]
    kreirajRed()
    popunjavanjeForme()
}

document.addEventListener('DOMContentLoaded', inicijalizujArtikle)