const Rating = ({meals,choice}) => {
    console.log(meals[choice])
    return (
        <div className="rating">
            {meals.length === 0 ? (<h3></h3>) : (<h3>{meals[choice].meal}  {meals[choice].rating}점</h3>)}
        </div>
    )
}

export default Rating