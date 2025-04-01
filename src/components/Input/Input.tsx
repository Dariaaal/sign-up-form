import { cx } from "../../utils/classNames";
import styles from "./Input.module.scss";

type Props = {
  placeholder: string;
  value: string;
  error?: boolean;
  onChange: (text: string) => void;
};

const Input: React.FC<Props> = ({ placeholder, value, error, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className={cx(styles["input-container"], error && styles["error"])}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
