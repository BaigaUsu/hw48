export function Title(props) {
    const {
        text,
    } = props
    return (
        <h1 {...props}>
            {text}
        </h1>
    )
}