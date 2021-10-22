import { useState, useEffect } from "react";
import axios from "axios";

const Comment = ({meal}) => {

    // const [mealComments, setMealComments] = useState([]);

    // useEffect(()=>{
    //     fetchMealComments()
    // }, [meal]);

    // const fetchMealComments = async () => {
    //     var mealCommentsData = []
    //     try {
    //       var res = await axios.get(`http://localhost:8000/meals/${meal.id}/comments`);
    //       mealCommentsData = res.data
    //     } catch (err) {
    //       mealCommentsData = []
    //     }
    //     setMealComments([...mealCommentsData]);
    // }
    
    return <div className="comments-container">
            <h3>Comments</h3>
            <div className="comments">
                {meal.comments.map((mealComment,index)=>(
                    <div className="comment" key={index}>
                        <p>{mealComment.writer_id} : {mealComment.content}</p>
                    </div>
                ))}
            </div>
        </div>
}

export default Comment