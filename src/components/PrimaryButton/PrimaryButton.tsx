import { cx } from "../../lib/classNames";
import styles from "./PrimaryButton.module.scss"

type Props = {
  text: string;
  disabled: boolean;
  onClick: () => void;
}

const PrimaryButton:React.FC<Props> = ({text, disabled, onClick}) => {
    return (
        <button
        onClick={onClick}
        className={
          disabled
            ? cx(styles["primary-button"], "button-disabled")
            : styles["primary-button"]
        }
      >
        {text} →
      </button>
    )
}

export default PrimaryButton;