import { useSelector } from "react-redux";
import { RootState } from "../../store";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { cx } from "../../lib/classNames";
import styles from "./AgePreferencesStep.module.scss";
import SelectInput from "../SelectInput/SelectInput";

const generateRange = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => (start + i).toString());

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = generateRange(1, 31);
const currentYear = new Date().getFullYear();
const birthYears = generateRange(currentYear - 50, currentYear - 18);
const minAge = 18;
const maxAge = 50;
const ageOptions = generateRange(minAge, maxAge);

type Props = {
  handleAgePreferencesChange: (
    field: "Month" | "Day" | "Year" | "From" | "To",
    value: string
  ) => void;
  handleNextClick: () => void;
};

const AgePreferencesStep: React.FC<Props> = ({
  handleAgePreferencesChange,
  handleNextClick,
}) => {
  const birthday = useSelector((state: RootState) => state.signUp.birthday);
  const agePreferences = useSelector(
    (state: RootState) => state.signUp.agePreferences
  );

  const fromAge = Number(agePreferences.from) || minAge;
  const toOptions = ageOptions.filter((age) => Number(age) >= fromAge);

  const isButtonDisabled =
    birthday.day === "" ||
    birthday.month === "" ||
    birthday.year === "" ||
    agePreferences.from === "" ||
    agePreferences.to === "";

  return (
    <div className={cx("content-wrapper", "content-gap-big")}>
      <h1 className="heading">Select your age preference for women</h1>
      <div className={styles["age-preferences-wrapper"]}>
        <SelectInput
          placeholder={"From"}
          options={ageOptions}
          value={agePreferences.from.toString()}
          onChange={(value) => handleAgePreferencesChange("From", value)}
        />
        <SelectInput
          placeholder={"To"}
          options={toOptions}
          value={agePreferences.to.toString()}
          onChange={(value) => handleAgePreferencesChange("To", value)}
        />
      </div>
      <div className={styles["age-wrapper"]}>
        <p className="text">What is your age?</p>
        <div className={styles["age-preferences-wrapper"]}>
          <SelectInput
            placeholder={"Month"}
            options={months}
            value={birthday.month}
            onChange={(value) => handleAgePreferencesChange("Month", value)}
          />
          <SelectInput
            placeholder={"Day"}
            options={days}
            value={birthday.day}
            onChange={(value) => handleAgePreferencesChange("Day", value)}
          />
          <SelectInput
            placeholder={"Year"}
            options={birthYears}
            value={birthday.year}
            onChange={(value) => handleAgePreferencesChange("Year", value)}
          />
        </div>
        <p className="additional-text">
          You don’t have to use your real name – feel free to use a nickname.
          You can change it anytime.
        </p>
      </div>
      <PrimaryButton
        text={"Continue"}
        disabled={isButtonDisabled}
        onClick={handleNextClick}
      />
    </div>
  );
};

export default AgePreferencesStep;
