import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { cx } from "../../utils/classNames";
import styles from "./FinalStep.module.scss";
import Agreement from "./Agreement/Agreement";
import { useState } from "react";

type Props = {
  handleJoinClick: () => void;
};

const FinalStep: React.FC<Props> = ({ handleJoinClick }) => {
  const [agreement, setAgreement] = useState<boolean>(false);

  const handleAgreeClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreement(event.target.checked);
  };

  return (
    <div className={cx("content-wrapper", "content-gap-big")}>
      <img src="congratulations.png" className={styles["final-img"]} />
      <h1 className="heading">Thanks for your answers!</h1>
      <p className="text">
        Please check the box below to accept our rules. You’re all set!
      </p>
      <Agreement checked={agreement} onChange={handleAgreeClick} />
      <PrimaryButton
        text={"Join now"}
        disabled={!agreement}
        onClick={handleJoinClick}
      />
    </div>
  );
};

export default FinalStep;
