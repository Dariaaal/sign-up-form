import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CookieBanner from "../components/CookieBanner/CookieBanner";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import GenderStep from "../components/GenderStep/GenderStep";
import NameStep from "../components/NameStep/NameStep";
import AgePreferencesStep from "../components/AgePreferencesStep/AgePreferencesStep";
import ContentPreferencesStep from "../components/ContentPreferencesStep/ContentPreferencesStep";
import PasswordStep from "../components/PasswordStep/PasswordStep";
import FinalStep from "../components/FinalStep/FinalStep";
import { Option } from "../models/Option";
import {
  nextStep,
  previousStep,
  setAgeFrom,
  setAgeTo,
  setBirthdayDay,
  setBirthdayMonth,
  setBirthdayYear,
  setContentPreferences,
  setEmail,
  setGender,
  setName,
  setPasssword,
} from "../store/slice";
import { RootState } from "../store";
import { cx } from "../utils/classNames";
import "../styles/main.scss";

const genderStepOptions: Option[] = [
  { id: 1, image: "male.png", text: "Male" },
  { id: 2, image: "female.png", text: "Female" },
];

const contentStepOptions: Option[] = [
  { id: 1, image: "hot.png", text: "Hot" },
  { id: 2, image: "trendy.png", text: "Trendy" },
];

const SignUpPage = () => {
  const [showCookies, setShowCookies] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [highlightSignIn, setHighlightSignIn] = useState(false);

  const step = useSelector((state: RootState) => state.signUp.step);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowCookies(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSignInClick = () => {
    setFadeOut(true);
    setHighlightSignIn(true);
    setTimeout(() => setShowCookies(false), 500);
    setTimeout(() => setHighlightSignIn(false), 1500);
  };

  const handleStepChange = {
    gender: (option: Option) => dispatch(setGender(option.text)),
    name: (name: string) => dispatch(setName(name)),
    age: (field: "Month" | "Day" | "Year" | "From" | "To", value: string) => {
      const actions = {
        Month: setBirthdayMonth,
        Day: setBirthdayDay,
        Year: setBirthdayYear,
        From: setAgeFrom,
        To: setAgeTo,
      };
      dispatch(actions[field](value));
    },
    content: (option: Option) => dispatch(setContentPreferences(option.text)),
    email: (email: string) => dispatch(setEmail(email)),
    password: (password: string) => dispatch(setPasssword(password)),
  };

  return (
    <div>
      <Header
        signInButton={step === 1}
        highlight={highlightSignIn}
        handleBackClick={() => dispatch(previousStep())}
      />
      <div className="page-container">
        <div
          className={cx(
            "content-wrapper",
            step === 1 ? "content-gap-medium" : "content-gap-big"
          )}
        >
          {step !== 6 && <ProgressBar step={step} totalSteps={6} />}
          {step === 1 && (
            <GenderStep
              options={genderStepOptions}
              handleGenderChoose={handleStepChange.gender}
              handleNextClick={() => dispatch(nextStep())}
            />
          )}
          {step === 2 && (
            <NameStep
              handleNextClick={() => dispatch(nextStep())}
              handleNameChange={handleStepChange.name}
            />
          )}
          {step === 3 && (
            <AgePreferencesStep
              handleAgePreferencesChange={handleStepChange.age}
              handleNextClick={() => dispatch(nextStep())}
            />
          )}
          {step === 4 && (
            <ContentPreferencesStep
              options={contentStepOptions}
              handleContentChoose={handleStepChange.content}
              handleEmailChange={handleStepChange.email}
              handleNextClick={() => dispatch(nextStep())}
            />
          )}
          {step === 5 && (
            <PasswordStep
              handlePasswordChange={handleStepChange.password}
              handleNextClick={() => dispatch(nextStep())}
            />
          )}
          {step === 6 && (
            <FinalStep handleJoinClick={() => navigate("/signin")} />
          )}
        </div>
      </div>
      {step === 1 && showCookies && (
        <CookieBanner onSignInClick={handleSignInClick} fadeOut={fadeOut} />
      )}
      {step === 1 && <Footer />}
    </div>
  );
};

export default SignUpPage;
