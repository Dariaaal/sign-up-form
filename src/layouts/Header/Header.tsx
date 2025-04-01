import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { cx } from "../../utils/classNames";
import BackButton from "../../components/BackButton/BackButton";

type Props = {
  signInButton: boolean;
  highlight: boolean;
  handleBackClick: () => void;
};

const Header: React.FC<Props> = ({
  signInButton,
  highlight,
  handleBackClick,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        signInButton
          ? styles["header-container"]
          : styles["header-container-without-button"]
      }
    >
      {!signInButton && <BackButton onClick={handleBackClick} />}
      <p className={styles["header-logo"]}>
        your <span className={styles["header-logo-span"]}>logo®</span>
      </p>
      <div className={styles["sign-up-wrapper"]}>
        {signInButton && (
          <p className={styles["sign-in-text"]}>Already have an account?</p>
        )}
        {signInButton && (
          <button
            className={cx(
              styles["sign-in-button"],
              highlight && styles["sign-in-button-highlight"]
            )}
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
