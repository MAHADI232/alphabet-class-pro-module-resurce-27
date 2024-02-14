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

