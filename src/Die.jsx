export default function Die(props) {
    return (
        <div className="btns">
            <button onClick={props.getNum}>{props.value}</button>
        </div>
    )
}