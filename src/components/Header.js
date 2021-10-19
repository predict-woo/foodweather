// import Weather from "./Weather"
import Score from "./Score"
import Menu from "./Menu"

const Header = ({meals,choice}) => {
	const meal = meals[choice];
	return (
		<div className="header">
			<div className="front">
				{/* <Weather
					meals = {meals}
					choice = {choice}
				/> */}
			</div>
			<Score
				meal = {meal}
			/>
			<Menu
				meal = {meal}
			/>
		</div>
	)
}

export default Header
