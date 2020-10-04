const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(mode = 'true') {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Error');
    message = message.toUpperCase();
    key = key.toUpperCase();
    while (key.length < message.length) { key += key; }
    let result = '';
    let position = 0;

    for (let i=0; i < message.length; i += 1) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {
        charCode -= 65;
        let charCodeEncrypted = key.charCodeAt(position) - 65;
        let resultCharCode = ((charCode + charCodeEncrypted) % 26) + 65;
        result += String.fromCharCode(resultCharCode);
        position++;
      } else {
        result += message[i];
      }
    }
    
    if (!this.mode) return result.split('').reverse().join('');
    return result;
  }    


  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Error');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    while (key.length < encryptedMessage.length) { key += key; }
    let result = '';
    let position = 0;
    
    for (let i=0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {
        charCode -= 65;
        let charCodeEncrypted = key.charCodeAt(position) - 65;
        let resultCharCode = ((charCode + 26 -  charCodeEncrypted) % 26) + 65;
        result += String.fromCharCode(resultCharCode);
        position++;
      } else {
        result += encryptedMessage[i];
      }
    }

    if (!this.mode) return result.split('').reverse().join('');
    return result;
  }

}

module.exports = VigenereCipheringMachine;
