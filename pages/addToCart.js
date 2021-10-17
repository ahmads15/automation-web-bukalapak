import * as base from '../base-functions/base-functions';
import  {client} from 'nightwatch-api';

const elements = {
  productItem : "(//div[@class='bl-product-card__description-name'])[1]",
  btnAddToCart: '.c-main-product__action__cart',
  btnLihatKeranjang: '.c-cart-dialog__cart-button',
  countCart : '.bl-text--caption',
  product : "[alt='FIFA 22 PC Steam Original - Download']",
  itemName: '.qa-item-name',
  btnHapus : '.qa-remove-item > .bl-link',
  wordingCartKosong: "//p[@class='mt-12 bl-text bl-text--subheading-3']",
};

export const chooseProduct = async () =>{
    await base.clickElementUseXpath(elements.productItem);  
};

export const addToCartProduct = async () => {
    await base.clickElement(elements.btnAddToCart);
};

export const verifyProductCart = async () => {
    await base.clickElement(elements.btnLihatKeranjang);
    await base.expectElementEqualText(elements.countCart, '1');
    await base.waitElementVisible(elements.product);
    await base.expectElementEqualText(elements.itemName,'FIFA 22 PC Steam Original - Download');
    await base.clickElement(elements.btnHapus);
    await client.pause(6000);
    await base.expectElementEqualTextXpath(elements.wordingCartKosong,'Yuk, tambahin ke keranjang dan bikin jadi milik kamu sekarang!');
};