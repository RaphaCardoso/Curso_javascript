const cities = ["São Paulo", "Rio de Jneiro", "Minas Gerais"]

let upperCaseCities = [];

for (let index = 0; index < cities.length; index++) {
    let citiesUpper = cities[index].toUpperCase();

    upperCaseCities.push(citiesUpper)
}

console.log(upperCaseCities);