var pizzaData = {
  smallQty: 0,
  medQty: 0,
  largeQty: 0,
  showCart: false,
  showBox: false,
  message: "",
  payAmount: 0,

  smallPrice() {
    return Number(this.smallQty * 39).toFixed(2);
  },
  medPrice() {
    return Number(this.medQty * 79).toFixed(2);
  },
  largePrice() {
    return Number(this.largeQty * 99).toFixed(2);
  },

  cartTotal() {
    let smallTot = this.smallQty * 39;
    let medTot = this.medQty * 79;
    let larTot = this.largeQty * 99;
    return smallTot + medTot + larTot;
  },

  cartTotalDisplay() {
    return Number(this.cartTotal()).toFixed(2);
  },

  addSmall() {
    this.smallQty++;
  },

  minSmall() {
    this.smallQty -= this.smallQty > 0 ? 1 : 0;
  },

  addMed() {
    this.medQty++;
  },

  minMed() {
    this.medQty -= this.medQty > 0 ? 1 : 0;
  },

  addLarge() {
    this.largeQty++;
  },

  minLarge() {
    this.largeQty -= this.largeQty > 0 ? 1 : 0;
  },

  checkout() {
    this.showCart = true;
  },

  getPayAmount() {
    try {
      return Number(this.payAmount);
    } catch (e) {}

    return 0;
  },

  checkoutPay() {
    let pay = this.getPayAmount();
    let total = this.cartTotal();
    if (pay < total) {
      this.showBox = true;
      this.message = "Sorry, that is not enough money!";
    } else {
      this.smallQty = 0;
      this.largeQty = 0;
      this.medQty = 0;
      this.payAmount = 0;
      this.showCart = false;

      this.showBox = true;
      this.message =
        "Enjoy your Pizza, here is your change R" +
        Number(pay - total).toFixed(2);
    }
  },

  closeBox() {
    this.showBox = false;
  },
};

document.addEventListener("alpine:init", () => {
  Alpine.directive("pizzaData", pizzaData);
});
