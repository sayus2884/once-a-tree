import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  solid?: boolean;
}

const Button: React.FC<Props> = ({ children, className, solid, ...props }) => {
  // TODO: create switch for button colors
  let buttonColor = "border border-ocean text-ocean hover:bg-ocean/80";

  if (solid) buttonColor = "bg-ocean text-white hover:bg-ocean/80";

  return (
    <button className={`${className} ${buttonColor} px-4 py-3 rounded-sm uppercase`} {...props}>
      {children}
    </button>
  );
};

export default Button;
