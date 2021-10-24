import Logo from "../icons/main/icon.svg"


const Toolbar = ({changePage}) => {
    return (
        <div className="toolbar">
            <img src = {Logo}/>
            <label onClick={()=>changePage(0)}>Home</label>
            <label onClick={()=>changePage(1)}>Comments</label>
            <label onClick={()=>changePage(2)}>Leader Board</label>
        </div>
    )
}

export default Toolbar
