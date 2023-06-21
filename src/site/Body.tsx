type BodyType = {
    titleForBody: string
}

export const Body = (props: BodyType) => {
    return (
        <div>
            <h2>{props.titleForBody}</h2>
        </div>
    )
}