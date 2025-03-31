import styles from "./ProgressBar.module.scss";

type Props = {
  step: number;
  totalSteps: number;
};

const ProgressBar: React.FC<Props> = ({ step, totalSteps }) => {
  const progressWidth = `${(step / totalSteps) * 100}%`;

  return (
    <div className={styles["progress-container"]}>
      <div className={styles["progress"]} style={{ width: progressWidth }} />
    </div>
  );
};

export default ProgressBar;
