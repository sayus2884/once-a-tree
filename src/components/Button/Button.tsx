import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={`${className} px-4 py-3`} {...props}>
      {children}
    </button>
  );
};

export default Button;
