const Score = ({meal}) => {
    let mealtimeinstr;
    if (meal.time === 0) {mealtimeinstr = "아침"}
    else if (meal.time === 1) {mealtimeinstr = "점심"}
    else if (meal.time === 2) {mealtimeinstr = "저녁"}

    return (
        <div className="rating">
            {meal === undefined ? (<h3></h3>) : (<h3>{mealtimeinstr}  {meal.score}점</h3>)}
        </div>
    )
}

export default Score