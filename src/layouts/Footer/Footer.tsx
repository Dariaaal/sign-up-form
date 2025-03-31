import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <ul className={styles["footer-list"]}>
        <li>
          <a
            href="https://amourlee.com/terms-of-use/"
            className={styles["footer-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </li>
        <li>
          <a
            href="https://amourlee.com/billing-policy/"
            className={styles["footer-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Billing policy
          </a>
        </li>
        <li>
          <a
            href="https://amourlee.com/cookie-policy/"
            className={styles["footer-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Policy
          </a>
        </li>
        <li>
          <a
            href="https://amourlee.com/refund-policy/"
            className={styles["footer-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Refund Policy
          </a>
        </li>
        <li>
          <a
            href="https://amourlee.com/privacy-policy/"
            className={styles["footer-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://amourlee.com/risks-notice/"
            className={styles["footer-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Risks Notice
          </a>
        </li>
        <li>
          <a
            href="https://amourlee.com/disclosures-disclaimers/"
            className={styles["footer-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Disclosures and Disclaimers
          </a>
        </li>
        <li>
          <a
            href="mailto:support@amourlee.com"
            className={styles["footer-link"]}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
