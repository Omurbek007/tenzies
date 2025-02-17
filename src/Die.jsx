export default function Die(props) {

    const style = {background: props.isHeld ? "#59E391" : "white"}
    return (
        <div className="btns">
            <button className="dice" style={{ ...style}}
                onClick={props.hold}
            >{props.dice}</button>
        </div>
    )
}