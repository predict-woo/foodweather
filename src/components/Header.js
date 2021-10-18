// import Weather from "./Weather"
import Rating from "./Rating"
import Menu from "./Menu"

const Header = ({meals,choice}) => {
	console.log(meals)
	console.log(choice)
	return (
		<div className="header">
			<div className="front">
				<Weather
					meals = {meals}
					choice = {choice}
				/>
			</div>
			<Rating
				meals = {meals}
				choice = {choice}
			/>
			<Menu
				meals = {meals}
				choice = {choice}
			/>
		</div>
	)
}

export default Header
