//Namaste JS Season2 Ep1
const cart = ["shoes", "mobile", "headphone"];

//Example of callback hell
createOrder(cart, function () {
  proceedToPayment(orderId, function () {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});


//Dont forget to return because we are using the values from one promise to another
//PROMISE states ==> PENDING,REJECTED,FULFILLED

//PROMISE is IMMUTABLE ONCE RESOLVED
//Same code can be written witn Promise
//Promise chaining (return the promise from chain)
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

// By using arrow operator
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));
