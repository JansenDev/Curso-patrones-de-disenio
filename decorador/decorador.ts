interface Component {
    operation(): string
}

class DefaultComponent implements Component {
    operation(): string {
        return `Default component`
    }

}
class Decorator implements Component {
    constructor(private component: Component) { }
    operation(): string {
        return this.component.operation()
    }
}

class ConcreteDecoratorA extends Decorator {
    operation(): string {
        return `ConcreteComponentA(${super.operation()})`
    }
}

class ConcreteDecoratorB extends Decorator {

    operation(): string {
        return `ConcreteComponentB(${super.operation()})`
    }

}

const comp = new DefaultComponent()

console.log("[Result]");
console.log(comp.operation());

const dec1 = new ConcreteDecoratorA(comp)
console.log("[Result]");
console.log(dec1.operation());

const dec2 = new ConcreteDecoratorB(dec1)
console.log("[Result]");
console.log(dec2.operation());

