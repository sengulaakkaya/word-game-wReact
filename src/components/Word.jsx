export default function Word(props){
    
    const elements = props.currentWord.split("").map((letter,index) => {
        const show = props.usedLetters.includes(letter)
        return(
            <span className="one-letter" key={index}>
                {(show || props.isGameOver)&& letter.toLocaleUpperCase()}
            </span>
        )
    })
    return (
        <section className="word-section">
            {elements}
        </section>
    )
}