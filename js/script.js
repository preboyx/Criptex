const messageText = document.getElementById('message-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const resultText = document.getElementById('result-text');
const key = 'PreBoyx';  

encryptButton.addEventListener('click', async () => {
  try {
    const message = messageText.value;
    const encryptedMessage = await encryptMessage(message); 
    
    resultText.classList.add('show');    
    resultText.textContent = encryptedMessage;
  } catch (error) {
    console.error('Error al encriptar:', error);
    resultText.textContent = 'Error al encriptar. Intenta de nuevo.';
  }
});

decryptButton.addEventListener('click', async () => {
  try {
    const message = messageText.value;
    const decryptedMessage = await decryptMessage(message); 
    
    resultText.classList.add('show'); 
    resultText.textContent = decryptedMessage;
  } catch (error) {
    console.error('Error al desencriptar:', error);
    resultText.textContent = 'Error al desencriptar. Intenta de nuevo.';
  }
});

async function encryptMessage(message) {
  const ciphertext = CryptoJS.AES.encrypt(message, key).toString();
  return ciphertext;
}

async function decryptMessage(message) {
  try {
    const bytes = CryptoJS.AES.decrypt(message, key);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  } catch (error) {
    console.error('Error al desencriptar:', error);
    throw new Error('This message is not encrypted');
  }
  
}
