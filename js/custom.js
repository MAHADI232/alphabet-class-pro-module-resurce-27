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
console.log('hello')

// handleKeyBoardPress
//  function handleKeyBoardPress(event){
//               const keyPressed = event.key;
//               const keyPressDisplay = document.getElementById('display-show');
//               const currentAlphabet = keyPressDisplay.innerText;
//               const keyAlphabet = currentAlphabet.toLowerCase();
         
//               //check match or not or yes control
//               if(keyPressed === keyAlphabet){
//                     console.log('you  got a poin' );
//                     removeBackgroundById(keyAlphabet)
//                       continueGame() 
//                  //update score.
//                  //1. get the current score
//                   const currentScoreElement  = document.getElementById('current-score') ;
//                       const currentScoreValue = currentScoreElement.innerText;
//                       const currentScore = parseInt(currentScoreValue)                     
//                    //2 . increase the sscore . 
//                    const newScore = currentScore +1;
//                    console.log(newScore)
//                  //3. show the updated score
//                   currentScoreElement.innerText =newScore;
                 
//               }else{
//                 console.log('youre wrong type');
//                 //step -1 : get the current life count .
//                 const currentLiefElement = document.getElementById('current-life');
//                  const currentvalueText = currentLiefElement.innerText;
//                  const currentLief = parseInt(currentvalueText);
//                 //step -2 : reduce the life count .
//                  const newLife = currentLief -1;
//                 //step- 3 : display the update life count.
//                      currentLiefElement.innerText = newLife;
//               }
           
//  }

function handleKeyBoardPress(event){
       const keyPressed = event.key;
       const keyAlphabet = keyPressDisplay('display-show');
       //check match or not or yes control
       if(keyPressed === keyAlphabet){
            console.log('i got a point ')
            console.log('you typing :',keyPressed);
            removeBackgroundById(keyAlphabet)
            continueGame() 
              //update score.
              //1. get the current score
            const  curreentScore = getTextElementById('current-score');
            const updatedScore = curreentScore + 1;
            setTextElementValueById('current-score',updatedScore)

       }else{
               //step -1 : get the current life count .
              console.log('you are wrong type');
              const lifeScore = getTextElementById('current-life');
              const changeLifeScore =  lifeScore -1;
              setTextElementValueById('current-life',changeLifeScore)

           if(changeLifeScore === 0){
              gameOver()
           }   
       }
       
     

}
 document.addEventListener('keyup',handleKeyBoardPress);

function continueGame(){
       //step-1. genarate a random alphabet
          const alphabet = getRandomAlphabet();
          //randomly genaraed alphabet to the sceen (show it)
    const  currentGenarateAlphabetElement = document.getElementById('display-show');
           currentGenarateAlphabetElement.innerText =alphabet;

         // key backroundolor change
          setBackgroundById(alphabet);
    }

function play(e){
       // hide evrything show only the playround
    hideElementById('home-screen')
    hideElementById('score-element')
    showElementById('playground-section')

    // reset playground
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    
    // handleKeyBoardPress()
    continueGame()
}
 function gameOver(){
       hideElementById('playground-section');
       showElementById('score-element')   
 }