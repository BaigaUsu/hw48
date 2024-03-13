export function List(props) {
    return (
        <ul {...props}>
            {props.children}
        </ul>
    )
}