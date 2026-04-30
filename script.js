
const textInput = document.getElementById("text-input"); 
const charCount = document.getElementById("char-count");



function countWords(str){
if(str.length >= 50){
  textInput.value = textInput.value.substring(0,50)
}
let updateCount = str.length;

if(updateCount > 50){
  updateCount = 50;
} 

charCount.textContent = `Character Count: ${updateCount}/50`

if(updateCount >= 50){
  charCount.classList.add("red");

}

}

textInput.addEventListener("input", function(){
countWords(textInput.value)
});

