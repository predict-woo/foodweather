const Rating = ({meals}) => {
    return (
        <div>
            {meals.length === 0 ? (<h3>No network Available</h3>) : (<h3>{meals[0]}</h3>)}
        </div>
    )
}

export default Rating
