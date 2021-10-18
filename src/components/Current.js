import Weather from "./Weather"

const Current = ({choice,meals}) => {
    
    const [time, setTime] = useState(new Date())

    const refreshClock = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
          };
      }, []);

    return (
        <div className="current">
            <div className="header">
                <div className="rating">
                    <Weather
                        choice = {choice}
                        meals = {meals}
                    />
                    <h3>오늘</h3>
                    <h5>{time.toLocaleString()}</h5>
                </div>
                <div>
                    {meals.length === 0 ? (<h3>404 Network Error</h3>) : (<h3>{''+meals[choice].rating}</h3>)} <div className="outoffive">/5.0</div>
                </div>
            </div>
            <div className="graph">
                
            </div>
        </div>
    )
}

export default Current
