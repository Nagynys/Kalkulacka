const cislo = parseInt(prompt("Zadejte první číslo"))
const cislo2 = parseInt(prompt("Zadejte druhé číslo"))

// Součet
const soucet = cislo + cislo2
const elementSoucet = document.createElement("p")
elementSoucet.textContent = `Součet: ${soucet}`
document.body.appendChild(elementSoucet)


// Rozdíl
const rozdil = cislo - cislo2
const elementRozdil = document.createElement("p")
elementRozdil.textContent = `Rozdíl: ${rozdil}`
document.body.appendChild(elementRozdil)


// Součin
const soucin = cislo * cislo2
const elementSoucin = document.createElement("p")
elementSoucin.textContent = `Součín: ${soucin}`
document.body.appendChild(elementSoucin)


// Podíl
const podil = cislo / cislo2
const elementPodil = document.createElement("p")
elementPodil.textContent = `Podíl: ${podil.toFixed(2)}`
document.body.appendChild(elementPodil)