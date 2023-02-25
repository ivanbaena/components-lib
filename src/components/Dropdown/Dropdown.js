import React, { useState, useEffect, useRef } from "react";
import Panel from "../Panel";
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!dropdownEl.current) {
        return;
      }
      
      if (!dropdownEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener('click', handler);
    }
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        value={option.value}
        onClick={() => handleSelect(option)}
        className="hover:bg-sky-100 p-1"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative" ref={dropdownEl}>
      <Panel
        className="flex justify-between items-center"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
