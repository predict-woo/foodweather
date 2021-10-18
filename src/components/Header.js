// import Weather from "./Weather"
import Rating from "./Rating"

const Header = ({meals}) => {
	return (
		<div>
			<Rating
				meals = {meals}
			/>
		</div>
	)
}

export default Header
