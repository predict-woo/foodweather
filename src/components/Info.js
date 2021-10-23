import Weather from "./Weather"

const Info = ({meal}) => {

    let mealtimeinstr;
    if (meal.time === 0) {mealtimeinstr = "아침"}
    else if (meal.time === 1) {mealtimeinstr = "점심"}
    else if (meal.time === 2) {mealtimeinstr = "저녁"}
    return (
        <div>
                <Weather
                    meal = {meal}
                    />
                <div className="info now">{mealtimeinstr}</div>
                <div className="info score">{meal.score}</div>
            </div>
        )
        
    }
    
export default Info
