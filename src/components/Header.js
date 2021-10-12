import Weather from "./Weather"
import Rating from "./Rating"

const Header = ({meals}) => {
	return (
		<div>
			<Weather
			/>
			<Rating
				meals = {meals}
			/>
		</div>
	)
}

export default Header
