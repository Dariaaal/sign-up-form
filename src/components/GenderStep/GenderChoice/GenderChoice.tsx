import { Option } from "../../../models/Option";
import Choice from "../../Choice/Choice";
import styles from "./GenderChoice.module.scss";

type Props = {
    options: Option[];
    selectedOption: string;
    onChange: (option: Option) => void;
}

const GenderChoice:React.FC<Props> = ({options, selectedOption, onChange}) => {
  return (
    <div className={styles["container"]}>
      <p className="text">Select your sex</p>
      <Choice options={options} onChange={onChange} selectedOption={selectedOption} />
    </div>
  );
};

export default GenderChoice;