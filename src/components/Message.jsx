export default function Message(props){
    const {isWin,isLost,isGameOver} = props
    const design = `message ${isLost?"gameover-msg":isWin?"gamewin-msg":null}`
    return (
        <section className={design}>
             {isGameOver&&<p>{isWin?"Congrats You Win":"You Die!"}</p>}
        </section>
    )
}