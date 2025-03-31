import { Option } from "../../models/Option";
import styles from "./Choice.module.scss";

type Props = {
  options: Option[];
  selectedOption: string;
  onChange: (selected: Option) => void;
};

const Choice: React.FC<Props> = ({ options, selectedOption, onChange }) => {
  return (
    <div className={styles["choice-container"]}>
      {options.map((item) => (
        <label key={item.id} className={styles["choice-item"]}>
          <input
            type="radio"
            value={item.text}
            className={styles["choice-radio"]}
            checked={selectedOption === item.text}
            onChange={() => onChange(item)}
          />
          <img src={item.image} alt={item.text} />
          <p>{item.text}</p>
        </label>
      ))}
    </div>
  );
};

export default Choice;
