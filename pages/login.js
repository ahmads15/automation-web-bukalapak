import * as base from '../base-functions/base-functions';
import  {client} from 'nightwatch-api';

const elements = {
  btnLoginHomepage : '.te-header-login',
  btnLanjut : '#submit_button',
  errMessageField: '.bl-text--caption',
  fieldEmail : '#user_identity_textfield',
  errMsgTokenAuth : "//p[@class='bl-text bl-text--body-default bl-text--ellipsis__2 bl-text--inverse']",
  passwordField: '#input-password',
  btnLoginPage: '#btn-login',
  errInvalidPass : '.bl-text--error',
  avatarUser: '.bl-avatar',
  userName : "//a[contains(.,'Ahmad Sutarji')]",
  btnLogout: "//p[contains(.,'Logout')]",
};

export const openWebsite = async (value) =>{
    if(value === 'login'){
        client.url('https://www.bukalapak.com/#');
        await base.clickElement(elements.btnLoginHomepage);
    }else{
        client.url('https://www.bukalapak.com/#');
    }
};

export const inputEmail = async (valueEmail)=> {
    await base.setValueElement(elements.fieldEmail, valueEmail);
};

export const clickBtnLanjut = async() => {
    await base.clickElement(elements.btnLanjut);
}

export const inputPassword = async (valuePass)=> {
    await base.setValueElement(elements.passwordField, valuePass);
    await base.clickElement(elements.btnLoginPage);
};

export const errMsgForm = async (valueMsg) => {
    if(valueMsg == 'mandatoryForm'){
        await base.expectElementEqualText(elements.errMessageField,'Form harus diisi dulu ya');
    }else if (valueMsg == 'invalidFieldEmailorPhone'){
        await base.expectElementEqualText(elements.errMessageField,'Akun tidak ditemukan. Periksa dan coba lagi ya.');
    }else{
        await base.expectElementEqualText(elements.errInvalidPass,'Password yang kamu masukkan salah. Silakan coba lagi.');
    }
};

export const verifySuccessLogin = async () => {
    await base.waitElementVisible(elements.avatarUser);
    await base.clickElement(elements.avatarUser);
    await base.waitElementVisibleWithXpath(elements.userName);
    await base.waitElementVisibleWithXpath(elements.btnLogout);
};