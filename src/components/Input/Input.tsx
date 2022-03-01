import React from "react";

interface Props
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  label?: string;
}

const Input: React.FC<Props> = ({ className, label, ...props }) => {
  return (
    <label className="flex flex-col gap-3 rounded border border-black/20">
      {label}
      <input className={`${className} ring-none p-2`} {...props} />
    </label>
  );
};

export default Input;
