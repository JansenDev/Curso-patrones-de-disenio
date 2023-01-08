interface IPersonBuilder {
    name: string,
    firstLastname: string,
    secondLastName: string,
    age: number

    setName(name: string): IPersonBuilder
    setFirstLastname(firstLastname: string): IPersonBuilder
    setsecondLastName(secondLastName: string): IPersonBuilder
    setAge(age: number): IPersonBuilder
    build(): Person
}

class Person {
    private name: string
    private firstLastname: string
    private secondLastName: string
    private age: number

    constructor(name: string, firstLastname: string, secondLastName: string, age: number) {
        this.name = name
        this.firstLastname = firstLastname
        this.secondLastName = secondLastName
        this.age = age
    }

    getFullanme() {
        return `${this.name} ${this.firstLastname} ${this.secondLastName} ${this.age}`
    }
}

class PersonBuilder implements IPersonBuilder {
    name: string
    firstLastname: string
    secondLastName: string
    age: number

    constructor() {
        this.name = ""
        this.firstLastname = ""
        this.secondLastName = ""
        this.age = 0
    }


    reset(): void {
        this.name = ""
        this.firstLastname = ""
        this.secondLastName = ""
        this.age = 0
    }

    setName(name: string): IPersonBuilder {
        this.name = name;
        return this
    }

    setFirstLastname(firstLastname: string): IPersonBuilder {
        this.firstLastname = firstLastname;
        return this
    }
    setsecondLastName(secondLastName: string): IPersonBuilder {
        this.secondLastName = secondLastName;
        return this
    }

    setAge(age: number): IPersonBuilder {
        this.age = age
        return this
    }

    build(): Person {
        const person = new Person(
            this.name,
            this.firstLastname,
            this.secondLastName,
            this.age
        )
        this.reset()
        return person
    }

}

class PersonDirector {
    private personBuilder: PersonBuilder
    constructor(personBuilder: PersonBuilder) {
        this.personBuilder = personBuilder
    }

    setPersonBuilder(personBuilder: PersonBuilder): void {
        this.personBuilder = personBuilder
    }
    createJanssenPerson() {
        this.personBuilder.setName("Janssen")
            .setFirstLastname("segura")
            .setsecondLastName("galindo")
            .setAge(25)
    }

    createJhonatanPerson() {
        this.personBuilder.setName("Jhonatan")
            .setFirstLastname("seg")
            .setsecondLastName("gal")
            .setAge(26)
    }
}

// const person = new Person("janssen", "segura", "galindo", 25);
// console.log(person);

const personBuilder = new PersonBuilder()

// const persona: Person = personBuilder.setName("jhonatan")
//     .setFirstLastname("seg")
//     .setsecondLastName("gal")
//     .setAge(26)
//     .build()

const personDirector = new PersonDirector(personBuilder)
personDirector.createJanssenPerson()
const janssen = personBuilder.build()
personDirector.createJhonatanPerson()
const jhonatan = personBuilder.build()
console.log(janssen);
console.log(jhonatan);
