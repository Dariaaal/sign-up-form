import styles from "./CookieBanner.module.scss";

type Props = {
  onSignInClick: () => void;
  fadeOut: boolean;
};

const CookieBanner: React.FC<Props> = ({ onSignInClick, fadeOut }) => {
  return (
    <div
      className={`${styles["cookies-container"]} ${
        fadeOut ? styles["fade-out"] : styles["visible"]
      }`}
    >
      <p className={styles["cookies-text"]}>
        We use cookies to make your experience better! If you continue to use
        this site we will assume you are happy with it.
      </p>
      <button className={styles["sign-in-button"]} onClick={onSignInClick}>
        Sign in
      </button>
    </div>
  );
};

export default CookieBanner;
