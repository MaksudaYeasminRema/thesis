import React, { useContext } from "react";
import { Context } from "../context/Index";
import Link from "next/link";
import { Grid, Typography } from "@mui/material";

import { scienceProgramsData } from "../evaluateComponents/data2";

const BachelorsPrograms = ({ bachelorsScore }) => {
  const [state, setState] = useContext(Context);

  function getStatus(bachelorsScore) {
    switch (true) {
      case 0 <= bachelorsScore && bachelorsScore < 50:
        return "none";
      case 50 <= bachelorsScore && bachelorsScore < 55:
        return "very bad";

      case 55 <= bachelorsScore && bachelorsScore < 60:
        return "bad";
      case 60 <= bachelorsScore && bachelorsScore <= 65:
        return "good";
      case 65 <= bachelorsScore && bachelorsScore <= 70:
        return "very good";
      case 70 <= bachelorsScore && bachelorsScore <= 75:
        return "best";
      case 75 <= bachelorsScore && bachelorsScore <= 80:
        return "excellent";
      case 80 <= bachelorsScore && bachelorsScore <= 85:
        return "star";
      case 85 <= bachelorsScore && bachelorsScore <= 90:
        return "super";
      case 90 <= bachelorsScore && bachelorsScore <= 95:
        return "brilliant";
      case 95 <= bachelorsScore && bachelorsScore <= 100:
        return "perfect";
    }
  }

  const scoreStatus = getStatus(bachelorsScore);

  const scholarships = scienceProgramsData
    .find((item) => item.score === scoreStatus)
    ?.scholarships.map((scholarship) => (
      <li className="pl-3" key={scholarship} value={scholarship}>
        {scholarship}
      </li>
    ));

  const programs = scienceProgramsData
    .find((data) => data.score === scoreStatus)
    ?.faculties.find((item) => item.uname === state.faculty_name)
    ?.programs.map((program) => (
      <li className="pl-3" key={program} value={program}>
        {program}
      </li>
    ));
  const programsOptions = scienceProgramsData
    .find((data) => data.score === scoreStatus)
    ?.faculties.find((item) => item.uname === state.faculty_name)
    ?.programs.map((program) => (
      <option className="pl-3" key={program} value={program}>
        {program}
      </option>
    ));

  return (
    <div>
      {scoreStatus === "none" ? (
        <>
          <div className="offerBox mt-4 mr-3 ml-1">
            <div className="programsOffer pb-5">
              <Typography
                style={{
                  padding: "20px 10px",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="h6"
                align="center"
              >
                Sorry!
              </Typography>

              <Typography
                style={{
                  padding: "20px 10px",
                  color: "black",
                  fontWeight: "bold",
                }}
                align="center"
              >
                You must score at least 50 to get a program.
              </Typography>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="offerBox mt-4 mr-3 ml-1">
            <div className="programsOffer pb-5">
              <Typography
                style={{
                  padding: "20px 10px",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="h6"
                align="center"
              >
                Suggested Programs
              </Typography>
              <Typography
                style={{
                  padding: "20px 10px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                You are eligible to apply for the following master's programs:
              </Typography>
              <ul>{programs}</ul>
            </div>

            {
              <div className="scholarshipOffer pb-5">
                <Typography
                  style={{
                    padding: "20px 10px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                  align="center"
                >
                  Scholarship{" "}
                </Typography>
                <Typography
                  style={{
                    padding: "20px 10px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Your scholarship covers:
                </Typography>
                <ul>{scholarships}</ul>
              </div>
            }
            <div className="scholarshipOffer pb-5">
              <Typography
                style={{
                  padding: "20px 10px",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="h6"
                align="center"
              >
                Apply Now!{" "}
              </Typography>
              <div className="custom-form mt-4  mx-3">
                <h6 className="ms-2">Choose a program *</h6>
                <div className="select-wrapper">
                  <Grid container>
                    <select
                      required
                      className="formSelect"
                      id="program"
                      name="program"
                      type="text"
                      onChange={(e) =>
                        setState({ ...state, program: e.target.value })
                      }
                    >
                      <option value="" disabled selected="selected">
                        Please choose...
                      </option>
                      {programsOptions}
                    </select>
                  </Grid>
                </div>
              </div>

              <div className="d-flex justify-content-center mt-5">
                <Link href="/apply">
                  <button
                    disableRipple
                    className="nextBackButton"
                    type="submit"
                  >
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BachelorsPrograms;
