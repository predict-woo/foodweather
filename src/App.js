import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer"
import About from "./components/About"
import Title from "./components/Title"
import Header from "./components/Header"

const App = () => {

  const [meals,setMeals] = useState([])

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
      var res = await fetch("http://localhost:5000/web")
      data = await res.json()
    } catch (err) {
      data = []
    }
    return data
  }

  return (
    <Router>
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <Title 
              />
              <Header
                meals = {meals}
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
