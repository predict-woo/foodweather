const Rating = ({meals,choice}) => {
    console.log(meals[choice])
    return (
        <div className="rating">
            {meals.length === 0 ? (<h3>404 Network Error</h3>) : (<h3>{meals[choice].meal}  {meals[choice].rating}</h3>)}
        </div>
    )
}

export default Rating