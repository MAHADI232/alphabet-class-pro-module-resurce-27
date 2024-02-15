// 

// function play(){
    
//     hideElementById('home-screen');
//     showElementById('playground-section')
//     continueGame()
// }
function hideElementById(elementId){
        const element = document.getElementById(elementId);
        element.classList.add('hidden')

}

function showElementById(elementId1){
    const showElement = document.getElementById(elementId1)
      showElement.classList.remove('hidden')
}

function setBackgroundById(element){
  const addBackgroundByColor = document.getElementById(element);
        const setBaakround =  addBackgroundByColor.classList.add('bg-green-500');
        return setBaakround
}

function removeBackgroundById(element){
  const addBackgroundByColor = document.getElementById(element);
        addBackgroundByColor.classList.remove('bg-green-500')       
}

function keyPressDisplay(elementId){
    const keyPressDisplay = document.getElementById(elementId)
    const keyAlphabetText = keyPressDisplay.innerText;
    const keyalphabet = keyAlphabetText.toLowerCase();
    return keyalphabet;

}

function getTextElementById(elementId){
      const  element = document.getElementById(elementId);
      const  elementValueText = element.innerText ;
      const  value = parseInt(elementValueText);
      return value;
}

function setTextElementValueById(elementId,value){
  const  element = document.getElementById(elementId);
         element.innerText = value ;
}

function getElementByTextId(elementId){
  const element = document.getElementById(elementId)
     const text = element.innerText
     return text
}

 function getRandomAlphabet(){
     // get or create an alphabets array.
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
      //get random index between 0-25.
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)
     const alphabet = alphabets[index]  ;
     return alphabet 
 }
// function getRandomAlphabet(){
//         const alphabetString ='abcdefghijklmnopqrstuvwxyz';
//         const alphabets = alphabetString.split('');
//         const alphabetsNumber = Math.random()*25;
//         const index = Math.round(alphabetsNumber);
//         const alphabet =alphabets[index]
//         return alphabet
//       }


