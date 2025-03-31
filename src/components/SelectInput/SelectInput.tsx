import { useState, useEffect, useRef } from "react";
import styles from "./SelectInput.module.scss";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";

type Props = {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const SelectInput: React.FC<Props> = ({
  placeholder,
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["select-container"]} ref={selectRef}>
      <div
        className={`${styles["select-input"]} ${isOpen ? styles["open"] : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || placeholder}
        <span className={`${styles["arrow"]} ${isOpen ? styles["open"] : ""}`}>
          <ArrowDownIcon />
        </span>
      </div>
      {isOpen && (
        <div className={styles["select-menu"]}>
          {options.map((option) => (
            <div
              key={option}
              className={styles["select-item"]}
              onClick={() => setIsOpen(false)}
              onMouseDown={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
