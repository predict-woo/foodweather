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
import Toolbar from "./components/Toolbar"
// import { Toolbar } from "@mui/material"


const App = () => {

  const [meals,setMeals] = useState([])
  const [choice,setChoice] = useState(0)
  const [pagenumber,setPagenumber] = useState(0)

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

  const changePage = (number) => {
    setPagenumber(number)
  }

  var meal = meals[choice]

  if (meals.length > 0) {

    var page

    var errorpage = (
      <div>Error!</div>
    )

    var homepage = (
      <div className="full">
        <Body
          choice = {choice}
          meals = {meals}
          onChoice = {onChoice}
        />
        <Current
            choice = {choice}
            meals = {meals}
        />
      </div>
    )

    var commentpage = (
      <div className="full">
        <Body
          choice = {choice}
          meals = {meals}
          onChoice = {onChoice}
        />
        <Comment
        
        />
      </div>
    )

    switch(pagenumber) {
      case 0:
        page = homepage;
        break;
      case 1:
        page = commentpage;
        break;
      default:
        console.log(1)
    }





    return (
      <Router>
          <Route
            path='/'
            exact
            render={(props) => (
              <>
                <Toolbar
                  changePage = {changePage}
                />
                {page}
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
