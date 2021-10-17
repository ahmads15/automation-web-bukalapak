const {Given, Then, When} = require('@cucumber/cucumber');
import * as addToCart from '../pages/addToCart'

When(/^User choose product on page$/,async () => {
    await addToCart.chooseProduct();
});

When(/^User add to cart product$/,async () => {
    await addToCart.addToCartProduct();
});

Then(/^User success add product to cart$/,async () => {
    await addToCart.verifyProductCart();
});