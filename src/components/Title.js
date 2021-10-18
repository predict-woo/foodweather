import { useState, useEffect } from "react"

const Title = () => {

    const [time, setTime] = useState(new Date())

    const refreshClock = () => {
        setTime(new Date())
    }

    const getMeal = (time) => {
        var hour = time.getHours()

        if (hour>5 && hour<10) {
            return ("아침")
        } else if (hour>10 && hour<16) {
            return ("점심")
        } else {
            return ("저녁")
        }
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
          };
      }, []);

    return (
        <div className="title">
            <h1 className="mealtype">{getMeal(time)}</h1>
            <h2 className="time">{time.getHours()}시 {time.getMinutes()}분</h2>
        </div>
    )
}

export default Title