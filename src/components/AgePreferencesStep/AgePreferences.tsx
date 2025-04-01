import styles from "./AgePreferencesStep.module.scss";
import AgeSelector from "./AgeSelector";

type Props = {
  valueFrom: string | number;
  valueTo: string | number;
  ageOptions: string[];
  toOptions: string[];
  handleAgePreferencesChange: (field: "From" | "To", value: string) => void;
};

const AgePreferences: React.FC<Props> = ({
  valueFrom,
  valueTo,
  ageOptions,
  toOptions,
  handleAgePreferencesChange,
}) => (
  <div className={styles["age-preferences-wrapper"]}>
    <AgeSelector
      label="From"
      options={ageOptions}
      value={valueFrom.toString()}
      onChange={(value) => handleAgePreferencesChange("From", value)}
    />
    <AgeSelector
      label="To"
      options={toOptions}
      value={valueTo.toString()}
      onChange={(value) => handleAgePreferencesChange("To", value)}
    />
  </div>
);

export default AgePreferences;
