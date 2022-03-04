import React from "react";
import Input from "../Input/Input";

interface Props {
  className?: string;
  query?: string;
  showResult?: boolean;
  label?: string;
}

const Searchbar: React.FC<Props> = ({ className, query, showResult, label, ...props }) => {
  return (
    <div className={`${className}`}>
      <Input defaultValue={query} label={label} />

      {showResult && <p className="mt-2">277 results for {query}</p>}
    </div>
  );
};

export default Searchbar;
