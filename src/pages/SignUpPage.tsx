import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CookieBanner from "../components/CookieBanner/CookieBanner";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import "../styles/main.scss";
import GenderStep from "../components/GenderStep/GenderStep";
import { Option } from "../models/Option";
import { nextStep, setGender, setName } from "../store/slice";
import { RootState } from "../store";
import NameStep from "../components/NameStep/NameStep";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import { cx } from "../lib/classNames";

const genderStepOptions: Option[] = [
  {
    id: 1,
    image: "male.png",
    text: "Male",
  },
  {
    id: 2,
    image: "female.png",
    text: "Female",
  },
];

const SignUpPage = () => {
  const [showCookies, setShowCookies] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const step = useSelector((state: RootState) => state.signUp.step);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCookies(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSignInClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowCookies(false);
      setFadeOut(false);
    }, 500);
  };

  const handleGenderChoose = (option: Option) => {
    dispatch(setGender(option.text));
  };

  const handleNameChoose = (name: string) => {
    dispatch(setName(name));
  };

  const handleNextClick = () => {
    dispatch(nextStep());
  };

  return (
    <div>
      <Header signInButton={step === 1} />
      <div className={"page-container"}>
        <div className={cx("content-wrapper", step === 1 ? "content-gap-medium" : "content-gap-big")}>
        <ProgressBar step={step} totalSteps={6}/>
        {step === 1 && (
          <GenderStep
            options={genderStepOptions}
            handleGenderChoose={handleGenderChoose}
            handleNextClick={handleNextClick}
          />
        )}
        {step === 2 && (
          <NameStep
            handleNextClick={handleNextClick}
            handleNameChange={handleNameChoose}
          />
        )}
        </div>
      </div>
      {showCookies && (
        <CookieBanner onSignInClick={handleSignInClick} fadeOut={fadeOut} />
      )}
      {step === 1 && <Footer />}
    </div>
  );
};

export default SignUpPage;
