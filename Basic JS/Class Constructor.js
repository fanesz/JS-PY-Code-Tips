// membuat class constructor yang menghasilkan object

class Company {
    constructor(name, country) {
        this.name = name
        this.country = country
        this.price = 0
    }
    Pricing(price) {
        this.price = price
    }
}

const toyota = new Company('Toyota', 'Japan')
console.log(toyota);
// Company { name: 'Toyota', country: 'Japan', price: 0 }


toyota.Pricing(10)

console.log(toyota);
// Company { name: 'Toyota', country: 'Japan', price: 10 }

