import "./index.css"

//size = "sm" | "md" | "lg"

export function Button(props){
    const {size, variant="primary",children} = props;
    const className = `my-button my-button--${variant} my-button--${size}`
    return <button className={className}>{children}</button>
}
export default Button;