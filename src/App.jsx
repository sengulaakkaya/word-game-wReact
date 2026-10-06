import Header from "./components/Header.jsx"
import Message from "./components/Message.jsx"
import Flowers from "./components/Flowers.jsx"
import Word from "./components/Word.jsx"
import Keyboard from "./components/Keyboard.jsx"
import { useState } from "react"
import { flowers } from "./data/flowers.js"
import { getWord } from "./data/words.js"
import "./index.css"
export default function App(){

  const [currentWord,setCurrentWord] = useState(getWord())//ilerde geliştireceksen burda fetch ile apiden kelime alma ekle ve kelimeleri bilmek zor ipucu veren bi component kısmı oluşturulabilir.
  const [usedLetters,setUsedLaters] = useState([])

  const wrongCount = 
  usedLetters.filter(letter => !currentWord.includes(letter)).length
  const isWin = currentWord.split("").every(letter=>usedLetters.includes(letter))
  const isLost = wrongCount === flowers.length

  function addUsedLetters(letter){
    setUsedLaters(prevLetters => 
      prevLetters.includes(letter) ? prevLetters : [...prevLetters,letter]
    )
  }
  function resetGame(){
    setCurrentWord(getWord())
    setUsedLaters([])
  }
  return(
    <>
        <Header attempts={flowers.length}/>
        <Message isWin={isWin} isLost={isLost} isGameOver={isLost||isWin}/>
        <Flowers wrongCount={wrongCount}/>
        <Word currentWord={currentWord} usedLetters={usedLetters} isGameOver={isLost||isWin}/>
        <Keyboard 
        onClick={addUsedLetters}
        usedLetters={usedLetters} 
        currentWord={currentWord}/>
        {(isWin || isLost) && <button className="newGame-btn" onClick={resetGame}>New Game</button>}
    </>
   
  )
}