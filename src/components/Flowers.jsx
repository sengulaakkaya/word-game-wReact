import { flowers } from "../data/flowers"
export default function Flowers(props){
    
    const elements = flowers.map((flower,index)=>{
        const style = {backgroundColor:flower.color}
        return (
        <span id={ index < props.wrongCount ? "lost" : null}
        key={flower.name}
        backgroundColor={flower.color}>
            {flower.emoji}</span>
        )
    })
    return(
        <section className="flowers">
            {elements}
        </section>
    )
}