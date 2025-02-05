export default function Die(props) {
    return (
        <div>
            {props.value.map((el, index) => (
                <button key={index}>{el}</button>
            ))}
        </div>
    )
}