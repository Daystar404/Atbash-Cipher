const text = document.querySelector('.text')
const button = document.querySelector('.button')
let ciphered = document.querySelector('.ciphered')
const excla = document.querySelector('.excla')
const abt = document.querySelector('.about')

const ALPHABET ='abcdefghijklmnopqrstuvwxyz'
const sym = '+-*/$():#"\',=!?.;[¿¡«‹€~§√¢£¥¤π^]{}<>&_%'
let len = ALPHABET.length-1
let word = ''
let cipher = ''
function atBash(){
  word = text.value
  for(let i=0; i<word.length; i++){
  isSymbol(word.charAt(i))
  for(let j=0; j<ALPHABET.length; j++){
    if(word.charAt(i) === ALPHABET.charAt(j)){
      cipher += ALPHABET.charAt(len-j)
    }
    if(!isNaN(word.charAt(i))){
      cipher += word.charAt(i)
      break
    }
    if(word.charAt(i) == word.charAt(i).toUpperCase() && word.charAt(i) == ALPHABET.charAt(j).toUpperCase()){
      cipher += ALPHABET.charAt(len-j).toUpperCase()
      break
    }
  }
}
function isSymbol(char){
  for(let i = 0; i < sym.length; i++){
      if(char == sym.charAt(i)){
        cipher += char
        break
      }
  }
}
}
function animate(){
  for(let i=0; i<cipher.length; i++){
       setTimeout(()=>{
         ciphered.textContent += cipher.charAt(i)
       }, i*20)
  }
}
button.addEventListener('click', ()=>{
  if(text.value != ''){
    ciphered.textContent = ''
    cipher = ''
    atBash()
    animate()
  }
})
let clickCount = 0
excla.addEventListener('click', ()=>{
  clickCount += 1
  abt.style.opacity = 1
  abt.style.display = 'block'
  if(clickCount > 1){
    abt.style.opacity = 0
    abt.style.display = 'none'
    clickCount = 0
  }
})