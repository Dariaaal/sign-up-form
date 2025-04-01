import SelectInput from "../SelectInput/SelectInput";

type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const AgeSelector: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => (
  <SelectInput
    placeholder={label}
    options={options}
    value={value}
    onChange={onChange}
  />
);

export default AgeSelector;
