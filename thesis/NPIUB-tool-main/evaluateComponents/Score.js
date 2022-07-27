import React, { useContext } from "react";
import { Context } from "../context/Index";

import { Typography } from "@mui/material";

import UnderSSC from "../programs/UnderSSC";
import SSCPrograms from "../programs/SSCPrograms";
import HSCPrograms from "../programs/HSCPrograms";
import DiplomaPrograms from "../programs/DiplomaPrograms";
import BachelorsPrograms from "../programs/BachelorsPrograms";

const Score = ({ setToggleState }) => {
  const [state, setState] = useContext(Context);

  const ssc_result = parseInt(state.ssc_result);
  const hsc_result = parseInt(state.hsc_result);
  const diploma_result = parseInt(state.diploma_result);
  const bachelors_result = parseInt(state.bachelors_result);
  const ECactivities = parseInt(state.ECactivities);
  const volunteerActivities = parseInt(state.volunteerActivities);
  const achievements = parseInt(state.achievements);
  const volunteerAchievements = parseInt(state.volunteerAchievements);

  const only_ssc_result = ssc_result * 16;
  const converted_ssc_result = ssc_result * 7;
  const converted_hsc_result = hsc_result * 9;
  const converted_diploma_result = diploma_result * 12;
  const converted_diploma_ssc = ssc_result * 6 + 2;
  const converted_bachelors_result = bachelors_result * 9 - 1;
  const converted_bachelors_ssc = ssc_result * 4;
  const converted_bachelors_hsc = hsc_result * 5;

  const non_academic_result =
    ECactivities + volunteerActivities + achievements + volunteerAchievements;

  const sscScore = only_ssc_result + non_academic_result;
  const hscScore =
    converted_ssc_result + converted_hsc_result + non_academic_result;
  const diplomaScore =
    converted_diploma_ssc + converted_diploma_result + non_academic_result;
  const bachelorsScore =
    converted_bachelors_ssc +
    converted_bachelors_hsc +
    converted_bachelors_result +
    non_academic_result;

  const study_level = state.study_level;

  function getScore(study_level) {
    switch (study_level) {
      case "Under SSC":
        return non_academic_result;
      case "SSC":
        return sscScore;
      case "HSC":
        return hscScore;
      case "Diploma":
        return diplomaScore;
      case "Bachelors":
        return bachelorsScore;
      default:
        return "";
    }
  }

  function getPrograms(study_level) {
    switch (study_level) {
      case "Under SSC":
        return (
          <>
            <div className="programsContainer">
              <UnderSSC setToggleState={setToggleState} />
            </div>
          </>
        );
      case "SSC":
        return (
          <>
            <div className="programsContainer">
              <SSCPrograms sscScore={sscScore} />
            </div>
          </>
        );
      case "HSC":
        return (
          <>
            <div className="programsContainer">
              <HSCPrograms hscScore={hscScore} />
            </div>
          </>
        );
      case "Diploma":
        return (
          <>
            <div className="programsContainer">
              <DiplomaPrograms diplomaScore={diplomaScore} />
            </div>
          </>
        );
      case "Bachelors":
        return (
          <>
            <BachelorsPrograms bachelorsScore={bachelorsScore} />
          </>
        );
      default:
        return "";
    }
  }

  return (
    <div>
      {!study_level ||
      !ECactivities ||
      !volunteerActivities ||
      !achievements ||
      !volunteerAchievements ? (
        <Typography
          style={{ padding: "20px 10px", color: "black", fontWeight: "bold" }}
          variant="h6"
          align="center"
        >
          Please complete all the steps to generate your score.
        </Typography>
      ) : (
        <>
          <Typography
            style={{ padding: "20px 10px", color: "black", fontWeight: "bold" }}
            variant="h6"
            align="center"
          >
            Congratulations!{" "}
          </Typography>
          <div className="scoreContainer">
            <span className="score">
              Your Score is {getScore(study_level)}{" "}
            </span>
          </div>
          {getPrograms(study_level)}
        </>
      )}
    </div>
  );
};

export default Score;
