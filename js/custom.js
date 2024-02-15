// function play(){
//         //hide the home screen, to hide the screen add the class hiddento the home section.
//   const    homeSection = document.getElementById('home-screen')
//            homeSection.classList.add('hidden')
//         //show the playground
//   const    playgroundSection =document.getElementById('playground-section')  
//            playgroundSection.classList.remove('hidden')
// }

// function getRandomAlphabet(){
//     //get or create an alphabets array.
//     const alphabetString ='abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     console.log(alphabets)
//     //get random index between 0-25.
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber)
//     const alphabetKay = alphabets[index]
//      return alphabetKay
// }
 function handleKeyBoardPress(event){
              const keyPressed = event.key;

              const keyPressDisplay = document.getElementById('display-show')
              const currentAlphabet = keyPressDisplay.innerText;
               const keyAlphabet = currentAlphabet.toLowerCase();
            
              //check match or not or yes control
              if(keyPressed === keyAlphabet){
                    console.log('you are got a poin' )
                    continueGame();
                    removeBackroundById(keyAlphabet)
              }else{
                console.log('varry sad or bad point')
              }
           
 }
 document.addEventListener('keyup',handleKeyBoardPress);

function continueGame(){
       //step-1. genarate a random alphabet
          const alphabet = getRandomAlphabet();
          //randomly genaraed alphabet to the sceen (show it)
    const      currentGenarateAlphabetElement = document.getElementById('display-show');
               currentGenarateAlphabetElement.innerText =alphabet;
         // key backroundolor change
          setBackgroundById(alphabet);
          removeBackroundById(alphabet)
        

              
    }


function play(e){
    hideElementById('home-screen')
    showElementById('playground-section')
    // handleKeyBoardPress()
    continueGame()

}