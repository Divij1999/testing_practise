const caesarCipher = (() => {

   const getUtfValue = (char) => {
       if (char.charCodeAt(0) === 90) {
           return 65;
       } else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) < 90) {
           return char.charCodeAt(0) + 1;
       } else if (char.charCodeAt(0) === 122) {
           return 97; 
       } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) < 122) {
           return char.charCodeAt(0) + 1;
       } else if (char.charCodeAt(0) === 32) {
           return 32;
       }
   };
   const cipher = (str) => {
       let cipheredStr = [];
       for(let i = 0; i < str.length; i++) {
          cipheredStr[i] = String.fromCharCode(getUtfValue(str[i]));
       }
       
       return cipheredStr.join('');
   };
  
   return {cipher};
})();

export default caesarCipher.cipher;