import { useState, useEffect } from "react"

const Comment = ({meal}) => {

    const [mealComments, setMealComments] = useState([]);

    useEffect(()=>{
        fetchMealComments()
    }, [meal]);

    const fetchMealComments = async () => {
        var mealCommentsData = []
        try {
          var res = await fetch(`http://localhost:8000/meals/${meal.id}/comments`)
          mealCommentsData = await res.json()
        } catch (err) {
          mealCommentsData = []
        }
        setMealComments([...mealCommentsData]);
    }
    
    return <div className="comments-container">
            <h3>Comments</h3>
            <div className="comments">
                {mealComments.map((mealComment,index)=>(
                    <div className="comment" key={index}>
                        <h5>{mealComment.user}</h5>
                        <p>{mealComment.content}</p>
                    </div>
                ))}
            </div>
        </div>
}

export default Comment