import Weather from "./Weather"

const Tile = ({meal,index,onChoice}) => {

    let mealtimeinstr;
    if (meal.time === 0) {mealtimeinstr = "아침"}
    else if (meal.time === 1) {mealtimeinstr = "점심"}
    else if (meal.time === 2) {mealtimeinstr = "저녁"}

    return (
        <div onClick = {()=>onChoice(index)} className = {meal.time===0 ? ("tile m") : (meal.time===1 ? ("tile l") : (meal.time===2 ? ("tile e") : ("tile")))}>
            <h3>{mealtimeinstr}</h3>
            <Weather
                meal = {meal}
            />
            

        </div>
    )
}

export default Tile
