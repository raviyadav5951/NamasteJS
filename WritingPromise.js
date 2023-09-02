const cart = ["shoes", "mobile", "headphone"];

const promise = createOrder(cart); // return orderid

promise
  .then(function (responseOrderId) {
    console.log("order id", responseOrderId);
    return responseOrderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("paymentInfo", paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart

    if (!validateCart()) {
      const error = new Error("cart is not valid");
      reject(error);
    }

    //logic for order
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });

  return pr;
}

function proceedToPayment(orderid) {
  return new Promise(function (resolve, reject) {
    resolve(`Payment successful for order== ${orderid}`);
  });
}

function validateCart() {
  return true;
}
