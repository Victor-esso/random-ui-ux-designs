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
        onClick={() => (options.length > 1 ? setIsOpen(!isOpen) : '')}
        className="w-max text-white bg-white/[.07] px-3 py-1 rounded-lg border border-solid border-white/[0.04]"
      >
        {initSelected ? initSelected.text : placeholder}
      </button>

      {isOpen && (
        <ul className="absolute w-full min-w-full max-w-max top-[100%] translate-y-[-100%] bg-[#171717] rounded-lg z-10 max-h-[140px] overflow-y-auto no-scrollbar">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`py-1 px-3 text-sm cursor-pointer w-full  min-w-max  ${
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
