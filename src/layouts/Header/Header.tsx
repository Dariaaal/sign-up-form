import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

type Props = {
    signInButton:boolean;
}

const Header:React.FC<Props> = ({signInButton}) => {
  const navigate = useNavigate();

  return (
    <div className={signInButton ? styles["header-container"] : styles["header-container-without-button"]}>
      <p className={styles["header-logo"]}>
        your <span className={styles["header-logo-span"]}>logo®</span>
      </p>
      <div className={styles["sign-up-wrapper"]}>
        {signInButton && <p className={styles["sign-in-text"]}>Already have an account?</p>}
        {signInButton && <button
          className={styles["sign-in-button"]}
          onClick={() => navigate("/signin")}
        >
          Sign in
        </button>}
      </div>
    </div>
  );
};

export default Header;
