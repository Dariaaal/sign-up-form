import { cx } from "../../utils/classNames";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import styles from "./PasswordStep.module.scss";
import Input from "../Input/Input";
import { useState } from "react";

const MIN_PASSWORD_LENGTH = 8;

type Props = {
  handlePasswordChange: (password: string) => void;
  handleNextClick: () => void;
};

const PasswordStep: React.FC<Props> = ({
  handlePasswordChange,
  handleNextClick,
}) => {
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const password = useSelector((state: RootState) => state.signUp.password);

  const handleConfirmedPasswordChange = (value: string) => {
    setConfirmedPassword(value);
  };

  const validatePassword = (password: string) => {
    setIsValid(password.length >= MIN_PASSWORD_LENGTH);
  };

  const onPasswordChange = (value: string) => {
    handlePasswordChange(value);
    setTimeout(() => validatePassword(value), 500);
  };

  const passwordsMatch = password === confirmedPassword;
  const isButtonDisabled = !password || !passwordsMatch || !isValid;

  return (
    <div className={cx("content-wrapper", "content-gap-big")}>
      <h1 className="heading">Create your password</h1>
      <div className={cx(styles["password-wrapper"], "content-gap-small")}>
        <Input
          placeholder="Your password"
          value={password}
          error={!isValid || (confirmedPassword !== "" && !passwordsMatch)}
          onChange={onPasswordChange}
        />
        {!isValid && (
          <p className="error-tip">
            Error! Password must be at least {MIN_PASSWORD_LENGTH} characters
            long.
          </p>
        )}
        <Input
          placeholder="Confirm password"
          value={confirmedPassword}
          error={confirmedPassword !== "" && !passwordsMatch}
          onChange={handleConfirmedPasswordChange}
        />
        {confirmedPassword && !passwordsMatch && (
          <p className="error-tip">Error! Passwords do not match.</p>
        )}
        <p className="additional-text">
          Passwords must be at least {MIN_PASSWORD_LENGTH} characters long. You
          can recover them anytime using your email.
        </p>
      </div>
      <PrimaryButton
        text="Continue"
        disabled={isButtonDisabled}
        onClick={handleNextClick}
      />
    </div>
  );
};

export default PasswordStep;
