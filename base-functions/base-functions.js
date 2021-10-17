const {client} = require('nightwatch-api');
const timeOut = 3000;


export const waitElementVisible = async (elementSelector) => {
    await client.waitForElementVisible(elementSelector, timeOut);
};

export const waitElementVisibleWithXpath = async (elementSelector) => {
    await client.useXpath();
    await client.waitForElementVisible(elementSelector, timeOut);
    await client.useCss();
};

export const elementIsVisible = async(elementSelector) => {
    let cekIsVisible;
    await client.cekIsVisible(elementSelector,(result) => {
        cekIsVisible = result.value;
    });
    return cekIsVisible;
};

export const clickElement = async (elementSelector) => {
    await waitElementVisible(elementSelector);
    await client.click(elementSelector);
};

export const clickElementViaXpath = async (elementSelector) => {
    await client.useXpath();
    await waitElementVisible(elementSelector);
    await client.click(elementSelector);
    await client.useCss();
};

export const setValueElement = async(elementSelector,value) => {
    await waitElementVisible(elementSelector);
    await client.clearValue(elementSelector);
    await client.setValue(elementSelector,value);
};

export const setValueElementThenEnter = async (elementSelector, value) => {
    await waitElementVisible(elementSelector);
    await client.clearValue(elementSelector);
    await client.setValue(elementSelector,[value, client.Keys.ENTER]);
};



export const clickElementUseXpath = async (elementSelector) => {
    await client.useXpath();
    await waitElementVisible(elementSelector);
    await client.click(elementSelector);
    await client.useCss();
};

export const expectElementEqualText = async (elementSelector, expectedText) => {
    await waitElementVisible(elementSelector);
    await client.expect.element(elementSelector).text.to.equal(expectedText);
};

export const expectElementEqualTextXpath = async (elementSelector, expectedText) => {
    await client.useXpath();
    await client.expect.element(elementSelector).text.to.equal(expectedText);
    await client.useCss();
};


export const getStringTextXpath = async (elementSelector) => {
    let text;
    client.useXpath();
    await waitElementVisible(elementSelector);
    await client.getText(elementSelector, (result) => {
      text = result.value;
    });
    client.useCss();
    return text;
  };


export const waitElementNotVisible = async (elementSelector) => {
    await client.waitForElementNotPresent(elementSelector, timeOut);
};


export const waitElementNotVisibleXpath = async (elementSelector) => {
    await client.useXpath();
    await client.waitForElementNotPresent(elementSelector, timeOut);
    await client.useCss();
};

export const getElementLengthXpath = async(using,locator) => {
    let getLength;
    client.useXpath();
    await client.elements(using,locator, (result) => {
        getLength = result.value.length;
    });
    client.useCss();
    return getLength;
};

export const scrolltoElement = async (elementSelector) => client.moveToElement(elementSelector,0,0);

export const expectElementContains = async(elementSelector, elementText) => {
    client.useXpath();
    await client.expect.element(elementSelector).text.to.contain(elementText);
    client.useCss();
};
