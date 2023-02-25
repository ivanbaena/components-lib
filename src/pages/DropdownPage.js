import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const options = [
  {
    label: "Red",
    value: "red",
    id: 1,
  },
  {
    label: "Green",
    content: "green",
    id: 2,
  },
  {
    label: "Blue",
    content: "blue",
    id: 3,
  },
];

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  return (
    <div className="flex">
      <Dropdown
        options={options}
        onChange={handleSelection}
        value={selection}
      />
      <Dropdown
        options={options}
        onChange={handleSelection}
        value={selection}
      />
    </div>
  );
}

export default DropdownPage;
