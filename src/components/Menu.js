const Menu = ({meals,choice}) => {
    console.log(meals[choice])
    return (
        <div className='menu'>
            {meals.length === 0 ? (<h3></h3>) : (<h3>{''+meals[choice].menu}</h3>)}
        </div>
    )
}

export default Menu
