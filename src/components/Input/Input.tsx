import styles from "./Input.module.scss";

type Props = {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
};

const Input: React.FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className={styles["input-container"]}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;