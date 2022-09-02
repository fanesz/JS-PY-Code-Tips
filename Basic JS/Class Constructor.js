// membuat class constructor yang menghasilkan object

class Company {
    constructor(name, country) {
        this.name = name
        this.country = country
    }
}

const tesla = new Company('Tesla', 'USA')
const toyota = new Company('Toyota', 'Japan')


console.log(tesla);
// output = Company { name: 'Tesla', country: 'USA' }
console.log(toyota);
//output = Company { name: 'Toyota', country: 'Japan' }
