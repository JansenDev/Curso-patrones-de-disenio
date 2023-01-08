interface Strategy {
  calculate(amount: number): number
}

class SaleContext {

  constructor(private strategy: Strategy) { }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  calculate(amount: number) {
    return this.strategy.calculate(amount);
  }
}


class RegularSaleStrategy implements Strategy {
  constructor(private tax: number) { }

  calculate(amount: number) {
    return amount + amount * this.tax;
  }
}


class DiscountSaleStrategy implements Strategy {

  constructor(private tax: number, private discount: number) { }

  calculate(amount: number) {
    return amount + amount * this.tax - this.discount;
  }
}


class ForeignSaleStrategy implements Strategy {

  calculate(amount: number) {
    return amount * this.getDolarPrice();
  }

  getDolarPrice() {
    return 3.8;
  }
}

const regularStrategy = new RegularSaleStrategy(0.5);
const sale = new SaleContext(regularStrategy);

const discountStrategy = new DiscountSaleStrategy(0.5, 20);
const foreignStrategy = new ForeignSaleStrategy()

console.log(sale.calculate(100));
sale.setStrategy(discountStrategy);
console.log(sale.calculate(100));
sale.setStrategy(foreignStrategy);
console.log(sale.calculate(100));
