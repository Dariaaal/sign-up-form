import { useSelector } from "react-redux";
import { RootState } from "../../store";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { cx } from "../../utils/classNames";
import BirthdaySelector from "./BirthdaySelector";
import AgePreferences from "./AgePreferences";
import { generateRange } from "../../utils/numberUtils";

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
    !birthday.day ||
    !birthday.month ||
    !birthday.year ||
    !agePreferences.from ||
    !agePreferences.to;

  return (
    <div className={cx("content-wrapper", "content-gap-big")}>
      <h1 className="heading">Select your age preference for women</h1>
      <AgePreferences
        valueFrom={agePreferences.from}
        valueTo={agePreferences.to}
        ageOptions={ageOptions}
        toOptions={toOptions}
        handleAgePreferencesChange={handleAgePreferencesChange}
      />
      <BirthdaySelector
        birthday={birthday}
        handleAgePreferencesChange={handleAgePreferencesChange}
      />
      <PrimaryButton
        text="Continue"
        disabled={isButtonDisabled}
        onClick={handleNextClick}
      />
    </div>
  );
};

export default AgePreferencesStep;
