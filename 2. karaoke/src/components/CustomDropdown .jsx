import { useState, useRef, useEffect } from "react";

const CustomDropdown = ({ options, placeholder = "Select an option", onChange , initSelected = null }) => {
  const [selected, setSelected] = useState(initSelected);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option); // Pass value to parent
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-max">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-max text-white bg-white/[.03] px-3 py-1 rounded-lg"
      >
        {initSelected ? initSelected.text : placeholder}
      </button>

      {isOpen && (
        <ul className="absolute w-max mt-1 bg-white/[.05] rounded-lg z-10 max-h-60 overflow-y-auto no-scrollbar">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`py-1 px-3 text-sm cursor-pointer  ${
                initSelected?.value === option.value ? "bg-white text-black" : "hover:bg-white/[.07] hover:text-white"
              }`}
            >
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
