const Menu = ({meal}) => {
    return (
        <div className='menu'>
            {meal === undefined ? (<h3></h3>) : (<h3>{''+meal.menu}</h3>)}
        </div>
    )
}

export default Menu
