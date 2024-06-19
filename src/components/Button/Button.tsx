import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
    text?: string;
}

const Button = ({ children, className, onClick, text }: Props) => {
    return (
        <button className={`px-8 py-4 ${className}`} onClick={onClick}>
            {children || text}
        </button>
    );
}

export default Button;
