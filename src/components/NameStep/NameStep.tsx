import { useSelector } from "react-redux";
import { RootState } from "../../store";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { cx } from "../../lib/classNames";
import Input from "../Input/Input";
import styles from "./NameStep.module.scss";

type Props = {
  handleNameChange: (name: string) => void;
  handleNextClick: () => void;
};

const NameStep: React.FC<Props> = ({ handleNameChange, handleNextClick }) => {
  const name = useSelector((state: RootState) => state.signUp.name);

  return (
    <div className={cx("content-wrapper", "content-gap-medium")}>
      <h1 className="heading">What name should users call you?</h1>
      <div className={styles["name-input-wrapper"]}>
        <Input
          placeholder={"Type your username"}
          value={name}
          onChange={handleNameChange}
        />
        <p className="additional-text">You don’t have to use your real name – feel free to use a nickname. You can change it anytime.</p>
      </div>
      <PrimaryButton
        text={"Continue"}
        disabled={name === ""}
        onClick={handleNextClick}
      />
    </div>
  );
};

export default NameStep;
