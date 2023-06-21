type FooterType = {
    titleForFooter: string;
}

export const Footer = (props: FooterType) => {
    return (
        <div>
            <h3>{props.titleForFooter}</h3>
        </div>
    )
}