export function Button(props) {
    return (
        <button
            {...props}
        >
            {props.text}
        </button>
    )
}