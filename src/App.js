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
    const res = await fetch("http://localhost:5000/web")
    console.log(res);
    const data = await res.json()
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
