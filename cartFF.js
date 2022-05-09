const smallPBtn = document.querySelector(".pBtn.small");
const medPBtn = document.querySelector(".pBtn.med");
const largePBtn = document.querySelector(".pBtn.large");

const smallPBtnBuy = document.querySelector(".pBtn.small.buy");
const medPBtnBuy = document.querySelector(".pBtn.med.buy");
const largePBtnBuy = document.querySelector(".pBtn.large.buy");

const smallMBtn = document.querySelector(".mBtn.small");
const medMBtn = document.querySelector(".mBtn.med");
const largeMBtn = document.querySelector(".mBtn.large");

const smallPizzaQty = document.querySelector(".smallPizzaQty");
const medPizzaQty = document.querySelector(".medPizzaQty");
const largePizzaQty = document.querySelector(".largePizzaQty");

const smallPizzaTotal = document.querySelector(".smallPizzaTotal");
const medPizzaTotal = document.querySelector(".medPizzaTotal");
const largePizzaTotal = document.querySelector(".largePizzaTotal");
const cartTotal = document.querySelector(".cartTotal");

const checkOut = document.querySelector(".checkOut");

const payOut = document.querySelector(".payOut");
const message = document.querySelector(".message");
const payAmt = document.querySelector(".payAmt");
const payBtn = document.querySelector(".payBtn");

const containerBox = document.querySelector(".containerBox");
const closeBtn = document.querySelector(".close");

var width = screen.availWidth;
var height = screen.availHeight;

containerBox.style.width = width + 'px';
containerBox.style.height = height + 'px';
containerBox.style.paddingTop = height * 1 / 3 + 'px';

const cartbill = cart();

function BtnClick(event) {
    cartbill.btnClickff(event.target.dataset.size);

    smallPizzaQty.innerHTML = cartbill.qtyUpdate().smallQty;
    medPizzaQty.innerHTML = cartbill.qtyUpdate().medQty;
    largePizzaQty.innerHTML = cartbill.qtyUpdate().largeQty;

    smallPizzaTotal.innerHTML = cartbill.priceUpdate().smallCost;
    medPizzaTotal.innerHTML = cartbill.priceUpdate().medCost;
    largePizzaTotal.innerHTML = cartbill.priceUpdate().largeCost;
    cartTotal.innerHTML = cartbill.priceUpdate().totalCart;

    if (cartbill.priceUpdate().totalCart > 0) {
        checkOut.classList.remove('hidden');
    } else {
        checkOut.classList.add('hidden');
        payOut.classList.add('hidden');
    }
}

function checkOutClick() {
    checkOut.classList.add('hidden');
    payOut.classList.remove('hidden');
}

function payment() {
    containerBox.classList.remove('hidden');
    var paymentAmt = Number(payAmt.value);
    if (paymentAmt == cartbill.priceUpdate().totalCart) {
        containerBox.style.backgroundColor = 'rgba(120, 255, 120, 0.95)';
        message.innerHTML = "Enjoy your Pizza!";
        cartbill.resetCart();

        smallPizzaQty.innerHTML = cartbill.resetCart().smallQty;
        medPizzaQty.innerHTML = cartbill.resetCart().medQty;
        largePizzaQty.innerHTML = cartbill.resetCart().largeQty;

        smallPizzaTotal.innerHTML = cartbill.resetCart().smallCost;
        medPizzaTotal.innerHTML = cartbill.resetCart().medCost;
        largePizzaTotal.innerHTML = cartbill.resetCart().largeCost;
        cartTotal.innerHTML = cartbill.resetCart().totalCart;

        setTimeout(function () {
            containerBox.classList.add('hidden');
            checkOut.classList.remove('hidden');
            payOut.classList.add('hidden');
            payAmt.value = "";
        }, 4500);

    } else if (paymentAmt > cartbill.priceUpdate().totalCart) {
        containerBox.style.backgroundColor = 'rgba(120, 255, 120, 0.95)';
        message.innerHTML = "Enjoy your Pizza, here is your change R" + cartbill.change(paymentAmt);
        cartbill.resetCart();

        smallPizzaQty.innerHTML = cartbill.resetCart().smallQty;
        medPizzaQty.innerHTML = cartbill.resetCart().medQty;
        largePizzaQty.innerHTML = cartbill.resetCart().largeQty;

        smallPizzaTotal.innerHTML = cartbill.resetCart().smallCost;
        medPizzaTotal.innerHTML = cartbill.resetCart().medCost;
        largePizzaTotal.innerHTML = cartbill.resetCart().largeCost;
        cartTotal.innerHTML = cartbill.resetCart().totalCart;

        setTimeout(function () {
            containerBox.classList.add('hidden');
            checkOut.classList.remove('hidden');
            payOut.classList.add('hidden');
            payAmt.value = "";
        }, 4500);

    } else {
        containerBox.style.backgroundColor = 'rgba(255, 120, 120, 0.95)';
        message.innerHTML = "Sorry, that is not enough money!";
        setTimeout(function () {
            containerBox.classList.add('hidden');
        }, 4500);
    }
}

function close() {
    containerBox.classList.add('hidden');
}

function resize() { 
width = screen.availWidth;
height = screen.availHeight;

containerBox.style.width = width + 'px';
containerBox.style.height = height + 'px';
containerBox.style.paddingTop = height * 1 / 3 + 'px';
}


smallPBtn.addEventListener('click', BtnClick);
smallMBtn.addEventListener('click', BtnClick);
smallPBtnBuy.addEventListener('click', BtnClick);

medPBtn.addEventListener('click', BtnClick);
medMBtn.addEventListener('click', BtnClick);
medPBtnBuy.addEventListener('click', BtnClick);

largePBtn.addEventListener('click', BtnClick);
largeMBtn.addEventListener('click', BtnClick);
largePBtnBuy.addEventListener('click', BtnClick);

checkOut.addEventListener('click', checkOutClick);

payBtn.addEventListener('click', payment);

closeBtn.addEventListener('click', close);

window.addEventListener('resize', resize);