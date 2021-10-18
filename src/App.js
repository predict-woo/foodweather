import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer"
import About from "./components/About"
import Title from "./components/Title"
import Header from "./components/Header"
import Body from "./components/Body"

const App = () => {

  const [meals,setMeals] = useState([])
  const [choice,setChoice] = useState(0)

  useEffect(() => {
    const getMeals = async () => {
      const mealsFromServer = await fetchMeals()
      setMeals(mealsFromServer)
    }
    getMeals()
  }, [])

  const fetchMeals = async () => {
    var data = 0
    try {
      var res = await fetch("http://localhost:8000/")
      data = await res.json()
    } catch (err) {
      data = []
    }
    return data
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
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
    </Router> 
  )
}


export default App;
