import { useState, useEffect } from "react";
import axios from "axios";

const Rating = ({meal}) => {

    const [mealRatings, setMealRatings] = useState(0);

    useEffect(()=>{
        fetchMealRatings()
    }, [meal]);

    const fetchMealRatings = async () => {
        var mealRatingsData = 0
        try {
          var res = await axios.get(`http://localhost:8000/meals/${meal.id}/ratings`);
          mealRatingsData = res.data.ratingavg
        } catch (err) {
          mealRatingsData = 0
        }
        setMealRatings(mealRatingsData);
    }
    
    return <div className="ratings-container">
            <h3>Ratings: {mealRatings}</h3>
        </div>
}

export default Rating