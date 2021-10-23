import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
import Footer from "./components/Footer"
import About from "./components/About"
import Title from "./components/Title"
import Header from "./components/Header"
import Body from "./components/Body"
import Comment from "./components/Comment"
import Rating from "./components/Rating"
import Current from "./components/Current"


const App = () => {

  const [meals,setMeals] = useState([])
  const [choice,setChoice] = useState(0)

  useEffect(() => {
    fetchMeals()
  }, [])

  const fetchMeals = async () => {
    var mealsData = [];
    try {
      var res = await axios.get("http://localhost:8000/meals/");
      mealsData = res.data;
    } catch (err) {
      mealsData = []
    }
    setMeals(mealsData)
  }

  const onChoice = (index) => {
    setChoice(index)
  }

  var meal = meals[choice]

  if (meals.length > 0) {
    return (
      <Router>
          <Route
            path='/'
            exact
            render={(props) => (
              <>
                <Body
                  choice = {choice}
                  meals = {meals}
                  onChoice = {onChoice}
                />
                <Current
                    choice = {choice}
                    meals = {meals}
                />
                {/* <Header
                  choice = {choice}
                  meals = {meals}
                />
                <Body
                  choice = {choice}
                  meals = {meals}
                  onChoice = {onChoice}
                />
                <Rating meal={meal} />
                <Comment 
                  meal = {meal}
                /> */}
              </>
            )}
          />
          <Route path='/about' component={About} />
          <Footer />
      </Router> 
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}


export default App;
