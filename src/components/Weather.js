import Clear from "../icons/svg/clear-day.svg"
import Cloud from "../icons/svg/partly-cloudy-day.svg"
import Rain from "../icons/svg/rain.svg"
import Thunder from "../icons/svg/thunderstorms-rain.svg"



const Weather = ({meal}) => { 
    return (
        <div>
            {meal.score === undefined ? (<h3>404 Network Error</h3>) : 
            (meal.score<=20 ? (<div className={"weather thunder"}>
                <img src = {Thunder}/>
            </div>):
            (meal.score<=40 ? (<div className={"weather thunder"}>
            <img src = {Thunder}/>
        </div>) : 
            (meal.score<=60 ? (<div className={"weather rain"}>
            <img src = {Rain}/>
        </div>) :
            (meal.score<=80 ? (<div className={"weather cloud"}>
            <img src = {Cloud}/>
        </div>) : 
            (meal.score<=100 ? (<div className={"weather clear"}>
            <img src = {Clear}/>
        </div>) : 
            (<h1>Error</h1>)
            )))))}
        </div>
    )
}

export default Weather