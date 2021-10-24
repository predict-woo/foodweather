import Logo from "../icons/main/icon.svg"


const Toolbar = ({changePage}) => {
    return (
        <div className="toolbar">
            <img className="item" src = {Logo}/>
            <label className="item" onClick={()=>changePage(0)}>Home</label>
            <label className="item" onClick={()=>changePage(1)}>Comments</label>
            <label className="item" onClick={()=>changePage(2)}>Leader Board</label>
        </div>
    )
}

export default Toolbar