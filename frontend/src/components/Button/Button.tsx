import "./Button.scss";

export type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary" | "light-grey" | "light-grey-lighter";
    size?: "large" | "medium" | "small";
};

const Button = ({
    label,
    variant = "primary",
    size = "large",
}: ButtonProps) => {
    return (
        <button
            className={`button button--${variant} && button button--${size}`}
        >
            {label}
        </button>
    );
};

export default Button;
