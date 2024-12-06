import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import "../data/backend-practice.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCarts } from "../data/cart.js";

async function loadPage() {
  await loadProductsFetch();

  await new Promise((resolve) => {
    loadCarts(() => {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCarts(() => {
      resolve();
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  });
})
  .then((value) => {
    console.log(value);
    return new Promise((resolve) => {
      loadCarts(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
*/

/*
loadProducts(() => {
  loadCarts(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
