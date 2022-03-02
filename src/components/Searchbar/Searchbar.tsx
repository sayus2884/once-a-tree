import React from "react";
import Input from "../Input/Input";

interface Props {
  className?: string;
  query?: string;
  showResult?: boolean;
}

const Searchbar: React.FC<Props> = ({ className, query, showResult, ...props }) => {
  return (
    <div className={`${className}`}>
      <Input defaultValue={query} />

      {showResult && <p className="mt-2">277 results for {query}</p>}
    </div>
  );
};

export default Searchbar;
