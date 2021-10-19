import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer"
import About from "./components/About"
import Title from "./components/Title"
import Header from "./components/Header"
import Body from "./components/Body"
import Comment from "./components/Comment"

const App = () => {

  const [meals,setMeals] = useState([])
  const [choice,setChoice] = useState(0)

  useEffect(() => {
    fetchMeals()
  }, [])

  const fetchMeals = async () => {
    var mealsData = [];
    try {
      var res = await fetch("http://localhost:8000/meals")
      mealsData = await res.json()
    } catch (err) {
      mealsData = []
    }
    setMeals(mealsData)
  }

  const onChoice = (index) => {
    setChoice(index)
  }

  return (
    <Router>
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {/* <Current
                choice = {choice}
                meals = {meals}
              />
              <Info
                  choice = {choice}
                  meals = {meals}
              /> */}
              <Header
                choice = {choice}
                meals = {meals}
              />
              <Body
                choice = {choice}
                meals = {meals}
                onChoice = {onChoice}
              />
              <Comment 
                meal = {meals[choice]}
              />
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
    </Router> 
  )
}


export default App;
