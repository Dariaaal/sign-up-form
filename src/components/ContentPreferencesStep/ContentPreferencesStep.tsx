import { cx } from "../../utils/classNames";
import { Option } from "../../models/Option";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ContentChoice from "./ContentChoice/ContentChoice";
import styles from "./ContentPreferencesStep.module.scss";
import Input from "../Input/Input";
import { useState } from "react";

type Props = {
  options: Option[];
  handleContentChoose: (option: Option) => void;
  handleEmailChange: (email: string) => void;
  handleNextClick: () => void;
};

const ContentPreferencesStep: React.FC<Props> = ({
  options,
  handleContentChoose,
  handleEmailChange,
  handleNextClick,
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const content = useSelector(
    (state: RootState) => state.signUp.contentPreferences
  );
  const email = useSelector((state: RootState) => state.signUp.email);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(value.trim() !== "" && emailRegex.test(value));
  };

  const onEmailChange = (value: string) => {
    handleEmailChange(value);

    setTimeout(() => {
      validateEmail(value);
    }, 500);
  };

  const isButtonDisabled = content === "" || !isValid;

  return (
    <div className={cx("content-wrapper", "content-gap-big")}>
      <h1 className="heading">What kind of content do you enjoy? 👀</h1>
      <ContentChoice
        options={options}
        onChange={handleContentChoose}
        selectedOption={content}
      />
      <div className={cx(styles["content-email-wrapper"], "content-gap-small")}>
        <p className="text">What is your email address?</p>
        <Input
          placeholder={"Type your email"}
          value={email}
          error={!isValid}
          onChange={onEmailChange}
        />
        {!isValid && (
          <p className="error-tip">Error! Please check your email</p>
        )}
        <p className="additional-text">Email is required for registration.</p>
      </div>
      <PrimaryButton
        text={"Continue"}
        disabled={isButtonDisabled}
        onClick={handleNextClick}
      />
    </div>
  );
};

export default ContentPreferencesStep;
