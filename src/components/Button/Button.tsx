import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
    text?: string;
    type?: "button" | "submit" | "reset";
}

const Button = ({ children, className, onClick, text, type = "button" }: Props) => {
    return (
        <button className={`px-8 py-4 ${className}`} type={type} onClick={onClick}>
            {children || text}
        </button>
    );
}

export default Button;
