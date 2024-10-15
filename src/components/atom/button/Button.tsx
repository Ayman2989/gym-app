import ButtonProps from "./type";

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  classes,
  onClick,

  ...restProps
}) => {
  return (
    <button type={type} onClick={onClick} {...restProps} className={classes}>
      <span className="flex items-center justify-center gap-3 font-bold">
        {children}
      </span>
    </button>
  );
};

export default Button;
