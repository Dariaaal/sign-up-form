import { cx } from "../../lib/classNames";
import { Option } from "../../models/Option";
import GenderChoice from "./GenderChoice/GenderChoice";
import PhotosCarousel from "./PhotosCarousel/PhotosCarousel";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

type Props = {
  options: Option[];
  handleGenderChoose: (option: Option) => void;
  handleNextClick: () => void;
};

const GenderStep: React.FC<Props> = ({
  options,
  handleGenderChoose,
  handleNextClick,
}) => {
  const gender = useSelector((state: RootState) => state.signUp.gender);

  return (
    <div className={cx("content-wrapper", "content-gap-small")}>
      <h1 className="heading">Glad you're here!</h1>
      <PhotosCarousel />
      <GenderChoice
        options={options}
        onChange={handleGenderChoose}
        selectedOption={gender}
      />
      <PrimaryButton
        text={"Continue"}
        disabled={gender === ""}
        onClick={handleNextClick}
      />
    </div>
  );
};

export default GenderStep;
