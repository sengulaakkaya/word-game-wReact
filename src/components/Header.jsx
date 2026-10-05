export default function Header(props){
    const attemps = 8
    return(
        <header>
            <h2>Word Game</h2>
            <p>Welcome to the word game.Guess the word in under {props.attempts} attemps.</p>
        </header>
    )
}