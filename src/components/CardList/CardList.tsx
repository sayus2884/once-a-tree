import React from "react";

interface Props {
  className?: string;
}

const CardList: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`${className} grid gap-16 md:grid-cols-2 lg:grid-cols-3`} {...props}>
      {children}
    </div>
  );
};

export default CardList;
