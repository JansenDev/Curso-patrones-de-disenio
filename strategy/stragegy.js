class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.discount = discount;
    this.tax = tax;
  }
  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

class ForeignSaleStrategy {
  calculate(amount) {
    return amount * this.getDolarPrice();
  }

  getDolarPrice() {
    return 3.8;
  }
}

const regularStrategy = new RegularSaleStrategy(0.5);
const discountStrategy = new DiscountSaleStrategy(0.5, 20);
const foreignStrategy = new ForeignSaleStrategy()
const sale = new SaleContext(regularStrategy);

console.log(sale.calculate(100));
sale.setStrategy(discountStrategy);
console.log(sale.calculate(100));
sale.setStrategy(foreignStrategy);
console.log(sale.calculate(100));
