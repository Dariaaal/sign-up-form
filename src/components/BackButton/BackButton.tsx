import { ArrowBackIcon } from "../icons/ArrowBackIcon";
import styles from "./BackButton.module.scss";

type Props = {
  onClick: () => void;
};

const BackButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      className={styles["back-button-container"]}
      onClick={onClick}
    >
      <ArrowBackIcon />
    </button>
  );
};

export default BackButton;
