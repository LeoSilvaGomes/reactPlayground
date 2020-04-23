const add = (a, b) => {
    // console.log(arguments)
    return a + b
}

console.log(add(55, 1, 1001)) 

const user = {
    name: 'Leonardo',
    cities: ['Taguatinga', 'Ceilândia', 'Recanto'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!')

    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [2, 3, 4, 5, 6, 8],
    multiplyBy: 9,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())