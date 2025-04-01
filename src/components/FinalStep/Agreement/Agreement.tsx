import { CheckedIcon } from "../../icons/CheckedIcon";
import styles from "./Agreement.module.scss";

type Props = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Agreement: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <div className={styles["agreement-container"]}>
      <label className={styles["checkbox-label"]}>
        <input type="checkbox" onChange={onChange} />
        {checked && <CheckedIcon />}
      </label>
      <p className="additional-text">
        I have read, understand and agree to Terms of Use, Privacy
        Policy, Cookie Policy, Billing & Refund Policy, Disclosures &
        Disclaimers
      </p>
    </div>
  );
};

export default Agreement;
