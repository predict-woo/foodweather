import Tile from "./Tile"

const Body = ({meals,choice,onChoice}) => {
    return (
        <div className="container">
            {meals.map((meal,index)=>(
                <Tile
                    index = {index}
                    meal = {meal}
                    onChoice = {onChoice}
                />
            ))}
        </div>
    )
}

export default Body
