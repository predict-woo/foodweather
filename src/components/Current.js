import Info from "./Info"
import Graph from "./Graph"

const Current = ({choice,meals}) => {
    /*
    const [time, setTime] = useState(new Date())

    const refreshClock = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
          };
      }, []); */

    return (
        <div className="current">
            <Info
                meal = {meals[choice]}
            />
            <Graph 
                meals = {meals}
                choice = {choice}
            />
        </div>
    )
}

export default Current
