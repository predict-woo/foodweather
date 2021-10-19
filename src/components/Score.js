const Score = ({meal}) => {
    return (
        <div className="rating">
            {meal === undefined ? (<h3></h3>) : (<h3>{meal.meal}  {meal.score}점</h3>)}
        </div>
    )
}

export default Score