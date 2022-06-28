const caesarCipher = (string, data) => {

  let result = '';
  for (let i = 0; i < string.length; i++) {
    const alphabet = string.charCodeAt(i);
    if (alphabet >= 65 && alphabet <= 90) {
      result += String.fromCharCode(((alphabet - 65 + data) % 26) + 65);
    } else if (alphabet >= 97 && alphabet <= 122) {
      result += String.fromCharCode(((alphabet - 97 + data) % 26) + 97);
    } else {
      result += String.fromCharCode(alphabet);
    }
    
  }

  return result;
};

export default caesarCipher;