import AgeSelector from "./AgeSelector";
import styles from "./AgePreferencesStep.module.scss";
import { generateRange } from "../../utils/numberUtils";

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

type Props = {
  birthday: { month: string; day: string; year: string };
  handleAgePreferencesChange: (
    field: "Month" | "Day" | "Year",
    value: string
  ) => void;
};

const BirthdaySelector: React.FC<Props> = ({
  birthday,
  handleAgePreferencesChange,
}) => (
  <div className={styles["age-wrapper"]}>
    <p className="text">What is your age?</p>
    <div className={styles["age-preferences-wrapper"]}>
      <AgeSelector
        label="Month"
        options={months}
        value={birthday.month}
        onChange={(value) => handleAgePreferencesChange("Month", value)}
      />
      <AgeSelector
        label="Day"
        options={days}
        value={birthday.day}
        onChange={(value) => handleAgePreferencesChange("Day", value)}
      />
      <AgeSelector
        label="Year"
        options={birthYears}
        value={birthday.year}
        onChange={(value) => handleAgePreferencesChange("Year", value)}
      />
    </div>
    <p className="additional-text">
      By proceeding, you confirm that you are fully legally capable of using
      this website and are at least 18 years old.
    </p>
  </div>
);

export default BirthdaySelector;
