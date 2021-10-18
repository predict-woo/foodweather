import Clear from "../icons/svg/clear-day.svg"
import Cloud from "../icons/svg/partly-cloudy-day.svg"
import Rain from "../icons/svg/rain.svg"
import Thunder from "../icons/svg/thunderstorms-rain.svg"



const Weather = ({meals,choice}) => {
    return (
        <div>
            {meals.length === 0 ? (<h3>404 Network Error</h3>) : 
            (meals[choice].rating<=1 ? (<div className={"weather thunder"}>
                <img src = {Thunder}/>
            </div>):
            (meals[choice].rating<=2 ? (<div className={"weather thunder"}>
            <img src = {Thunder}/>
        </div>) : 
            (meals[choice].rating<=3 ? (<div className={"weather rain"}>
            <img src = {Rain}/>
        </div>) :
            (meals[choice].rating<=4 ? (<div className={"weather cloud"}>
            <img src = {Cloud}/>
        </div>) : 
            (meals[choice].rating<=5 ? (<div className={"weather clear"}>
            <img src = {Clear}/>
        </div>) : 
            (<h1>Error</h1>)
            )))))}
        </div>
    )
}

export default Weather