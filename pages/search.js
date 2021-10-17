import * as base from '../base-functions/base-functions';
import  {client} from 'nightwatch-api';

const elements = {
  searchField : '#v-omnisearch__input',
  imageNotFound : "[src='https://s2.bukalapak.com/dora/assets/illustrations/img_small_emptystate_general@2x.png']",
  wordingMaafBrgTidakKetemu : "//p[.='Maaf, barangnya tidak ketemu']",
  wordingCekLagiKata : "//p[.='Coba cek lagi kata pencarianmu.']",
  titleItem : "(//div[@class='bl-product-card__description-name'])",
  imageProduct : "//img[@class='bl-thumbnail--img']",
  priceDisc : '.bl-text.bl-text--subheading-2',
  priceBeforeDisc : '.mr-4.bl-text',
  discPercent : '.bl-text.bl-text--caption.bl-text--error',
  ratingProduct : '.bl-product-card__description-rating',
  descStore : '.bl-product-card__description-store',
  wordingPencarianTerkait: '.bl-text--body-default.mb-16',
  relatedKeyword_1: "//a[.='Fifa 22 Pc Steam']",
  relatedKeyword_2: "//a[.='Fifa 22 Pc Steam Original']",
  relatedKeyword_3: "//a[.='Fifa 22 Pc Game Original']",
  relatedKeyword_4: "//a[.='Fifa 22 Pc Game']",
  relatedKeyword_5: "//a[.='22 Pc Steam Original']",
};

export const inputSearch = async (valueSearch) =>{
    await base.setValueElementThenEnter(elements.searchField, valueSearch);
};

export const verifyResults = async (valResults) => {
    var getLengtData = await base.getElementLengthXpath('xpath', elements.titleItem);
    if(valResults === 'searchNotFound'){
      await base.waitElementVisible(elements.imageNotFound);
      await base.expectElementEqualTextXpath(elements.wordingMaafBrgTidakKetemu,'Maaf, barangnya tidak ketemu');
      await base.expectElementEqualTextXpath(elements.wordingCekLagiKata,'Coba cek lagi kata pencarianmu.');
    }else{
      for(var i = 1; i <= getLengtData; i++){
        await base.expectElementContains(elements.titleItem, 'FIFA 22 PC Steam');
        await base.waitElementVisibleWithXpath(elements.imageProduct);
        await base.waitElementVisible(elements.priceDisc);
        await base.waitElementVisible(elements.priceBeforeDisc);
        await base.waitElementVisible(elements.discPercent);
        await base.waitElementVisible(elements.ratingProduct);
        await base.waitElementVisible(elements.descStore);
      }
      await base.expectElementEqualText(elements.wordingPencarianTerkait,'Pencarian Terkait');
      await base.expectElementEqualTextXpath(elements.relatedKeyword_1,'Fifa 22 Pc Steam');
      await base.expectElementEqualTextXpath(elements.relatedKeyword_2,'Fifa 22 Pc Steam Original');
      await base.expectElementEqualTextXpath(elements.relatedKeyword_3,'Fifa 22 Pc Game Original');
      await base.expectElementEqualTextXpath(elements.relatedKeyword_4,'Fifa 22 Pc Game');
      await base.expectElementEqualTextXpath(elements.relatedKeyword_5,'22 Pc Steam Original');
    }
};