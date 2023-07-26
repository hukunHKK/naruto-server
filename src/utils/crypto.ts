import CryptoJS from 'crypto-js/crypto-js'

// AES 秘钥
let AesKey = "7001c66ff1b8b3d8";
// AES-128-CBC偏移量
let CBCIV = "f5928b5d100623d6";
// 加密选项
let CBCOptions = {
  iv: CryptoJS.enc.Utf8.parse(CBCIV),
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
}
let key = CryptoJS.enc.Utf8.parse(AesKey);
// 加密
export function encrypt(data, isJson) {
  if (isJson) {
    data = JSON.stringify(data)
  }
  let secretData = CryptoJS.enc.Utf8.parse(data);
  let encrypted = CryptoJS.AES.encrypt(
    secretData,
    key,
    CBCOptions
  );
  return encrypted.toString();
}

// 解密
export function decrypt(data, isJson) {
  const res = CryptoJS.AES.decrypt(data, key, CBCOptions).toString(CryptoJS.enc.Utf8)
  if (isJson) {
    return JSON.parse(res)
  }
  return res
}