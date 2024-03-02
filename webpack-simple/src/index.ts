abstract class Base {
    constructor() {
        this.initialize()
    }

    initialize(): void {}
}

class Derived extends Base {
    variable: number

    constructor() {
        super()
        console.log("End of Derived.constructor, this.variable =", this.variable)
    }

    override initialize(): void {
        super.initialize()
        this.variable = 23
        console.log("End of Derived.initialize, this.variable =", this.variable)
    }
}


const derived = new Derived()
console.log("Client code, derived.variable =", derived.variable)
