const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",]
//get random characters
//generate random code
let boxEl = document.querySelector(".innerText");
let boxElTwo = document.querySelector(".innerText2");
let btn = document.getElementById("generate-btn");
let passwordLength = 12;

function getRandomChar() {
   let random = Math.floor(Math.random() * characters.length);
   return characters[random]
}
function generatePassword() {
   let password = "";
   let passwordTwo = ""
   for (let i = 0; i < passwordLength; i++) {
      password += getRandomChar();
      passwordTwo += getRandomChar();
   }
   boxEl.textContent = password;
   boxElTwo.textContent = passwordTwo;
}

btn.addEventListener("click", generatePassword);