import Weather from "./Weather"

const Tile = ({meal,index,onChoice}) => {
    return (
        <div onClick = {()=>onChoice(index)} className = {meal.meal==="아침" ? ("tile m") : (meal.meal==="점심" ? ("tile l") : (meal.meal==="저녁" ? ("tile e") : ("tile")))}>
            <Weather
                meal = {meal}
            />
            {<h3>{meal.meal}</h3>}

        </div>
    )
}

export default Tile
