import { useState, useEffect } from "react";
import axios from "axios";

function calculateRatingAverage(array) {
  var total = 0;
  var count = 0;

  array.forEach(function(item, index) {
      total += item.rating;
      count++;
  });

  if (count == 0) {return "No Data Yet. Please Rate This MEAL!"}
  return (total / count).toFixed(2);
}

const Rating = ({meal}) => {

    // const [mealRatings, setMealRatings] = useState(0);

    // useEffect(()=>{
    //     fetchMealRatings()
    // }, [meal]);

    // const fetchMealRatings = async () => {
    //     var mealRatingsData = 0
    //     try {
    //       var res = await axios.get(`http://localhost:8000/meals/${meal.id}/ratings`);
    //       mealRatingsData = res.data.ratingavg
    //     } catch (err) {
    //       mealRatingsData = 0
    //     }
    //     setMealRatings(mealRatingsData);
    // }
    
    return <div className="ratings-container">
            <h3>Ratings: {calculateRatingAverage(meal.ratings)}</h3>
        </div>
}

export default Rating