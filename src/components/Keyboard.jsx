export default function Keyboard(props){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const buttons = alphabet.split("").map(letter => {
        const isGuessed = props.usedLetters.includes(letter)
        const isCorrect = isGuessed && props.currentWord.toLocaleLowerCase().includes(letter)
        const color = isGuessed? (isCorrect?"green":"red"):null
        return(
            <button 
                key={letter}
                className="keyboard-btn" 
                style={
                    {
                        backgroundColor:color
                    }
                }
                onClick={()=>props.onClick(letter)}
            >
                    {letter.toLocaleUpperCase()}
            </button>
        )
    })
    return(
        <section className="keyboard">
            {buttons}
        </section>
    )
}