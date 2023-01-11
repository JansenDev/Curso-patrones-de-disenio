//  Similar que state y strategi solo que las strategis son implementadores de la clase abstracta

interface cryptImplement {
    code(value: string): string
    decode(value: string): string
}

class CryptAbstraction {
    constructor(protected implementation: cryptImplement) { }

    code(value: string): string {
        return this.implementation.code(value)
    }
    decode(value: string): string {
        return this.implementation.decode(value)
    }
}

class JwtImplement implements cryptImplement {

    code(value: string): string {
        return `JWT CODE!: ${value}`
    }
    decode(value: string): string {
        return `JWT ENCODE: ${value}`
    }
}


class Base64Implement implements cryptImplement {

    code(value: string): string {
        return `BASE64 CODE!: ${value}`
    }
    decode(value: string): string {
        return `BASE64 ENCODE: ${value}`
    }
}

/**facilmente podemos herdar y agregar mas funcionalidad a nuestra abstraccion */
class CryptoExtend extends CryptAbstraction {

    private valueValid = "12345"

    verify(value: string): boolean {
        return value === this.valueValid
    }
    sign(value: string): boolean {
        return value === this.valueValid
    }


}

const implement = new JwtImplement()
const implement2 = new Base64Implement()

const crypt = new CryptAbstraction(implement)
const cryptoExtend = new CryptoExtend(implement2)


console.log(crypt.code("HOla"));
console.log(cryptoExtend.verify("12345"));
