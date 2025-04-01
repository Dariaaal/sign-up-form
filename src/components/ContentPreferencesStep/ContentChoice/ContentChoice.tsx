import { Option } from "../../../models/Option";
import Choice from "../../Choice/Choice";
import styles from "./ContentChoice.module.scss"

type Props = {
    options: Option[];
    selectedOption: string;
    onChange: (option: Option) => void;
}

const ContentChoice:React.FC<Props> = ({options, selectedOption, onChange}) => {
  return (
    <div className={styles["container"]}>
      <Choice options={options} onChange={onChange} selectedOption={selectedOption} />
    </div>
  );
};

export default ContentChoice;