import React, { useState, useContext } from "react";
import { Context } from "../context/Index";
import { useRouter } from "next/router";
import { Card, Grid, Typography } from "@mui/material";
import Academics from "./Academics";
import ExtraCurriculars from "./ExtraCurriculars";
import Achievements from "./Achievements";

import Score from "./Score";

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function Evaluate() {
  const router = useRouter();
  const [state, setState] = useContext(Context);

  const initState = {
    study_level: "",
    ssc_result: "",
    ssc_group: "",
    ssc_roll: "",
    ssc_reg: "",
    ssc_board: "",
    ssc_pyear: "",
    hsc_result: "",
    hsc_group: "",
    hsc_roll: "",
    hsc_reg: "",
    hsc_board: "",
    hsc_pyear: "",
    bachelors_result: "",
    bachelors_faculty: "",
    bachelors_dept: "",
    bachelors_institute: "",
    bachelors_pyear: "",
    faculty_name: "",
    diploma_result: "",
    diploma_dept: "",
    diploma_institute: "",
    diploma_pyear: "",
  };
  const [userData, setUserData] = useState(initState);

  const [toggleState, setToggleState] = useStickyState(1, "data");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleSubmit = () => {
    setState(userData);
    // router.reload(window.location.pathname)

    setToggleState((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      {/* ...............mobile menu starts here.................. */}
      <div className="d-block d-md-block d-lg-none">
        <Card elevation={6} style={{ padding: "5px" }}>
          <Grid
            style={{ marginTop: "10px", marginBottom: "10px" }}
            container
            spacing={4}
            alignItems="center"
          >
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={6}
              md={6}
            >
              <div
                className={
                  toggleState === 1 ? "activeAcademicTab" : "normalAcademicTab"
                }
                onClick={() => toggleTab(1)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "blueviolet",
                  }}
                >
                  {" "}
                  Academics
                </Typography>
              </div>
            </Grid>

            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={6}
              md={6}
            >
              <div
                className={
                  toggleState === 2 ? "activeExtraTab" : "normalExtraTab"
                }
                onClick={() => toggleTab(2)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "blueviolet",
                  }}
                >
                  {" "}
                  ExtraCurriculars
                </Typography>
              </div>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={6}
              md={6}
            >
              <div
                className={
                  toggleState === 3
                    ? "activeAchievementTab"
                    : "normalAchievementTab"
                }
                onClick={() => toggleTab(3)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "blueviolet",
                  }}
                >
                  Achievements
                </Typography>
              </div>
            </Grid>

            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={6}
              md={6}
            >
              <div
                className={
                  toggleState === 4 ? "activeScoreTab" : "normalScoreTab"
                }
                onClick={() => toggleTab(4)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "blueviolet",
                  }}
                >
                  Score
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
      {/*.................. desktop menu starts here ..............*/}

      <div className="d-none d-md-none d-lg-block">
        <Card elevation={6} style={{ padding: "10px" }}>
          <Grid
            style={{ marginTop: "10px", marginBottom: "10px" }}
            container
            spacing={2}
            alignItems="center"
          >
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              md={3}
              lg={3}
            >
              <div
                className={
                  toggleState === 1 ? "activeAcademicTab" : "normalAcademicTab"
                }
                onClick={() => toggleTab(1)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "blueviolet",
                  }}
                >
                  {" "}
                  Academics
                </Typography>
              </div>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              md={3}
              lg={3}
            >
              <div
                className={
                  toggleState === 2 ? "activeExtraTab" : "normalExtraTab"
                }
                onClick={() => toggleTab(2)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "blueviolet",
                  }}
                >
                  {" "}
                  ExtraCurriculars
                </Typography>
              </div>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              md={3}
              lg={3}
            >
              <div
                className={
                  toggleState === 3
                    ? "activeAchievementTab"
                    : "normalAchievementTab"
                }
                onClick={() => toggleTab(3)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "blueviolet",
                  }}
                >
                  Achievements
                </Typography>
              </div>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              md={3}
              lg={3}
            >
              <div
                className={
                  toggleState === 4 ? "activeScoreTab" : "normalScoreTab"
                }
                onClick={() => toggleTab(4)}
              >
                <Typography
                  style={{
                    fontSize: "15px",
                    marginTop: "5px",
                    color: "blueviolet",
                  }}
                >
                  Score
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>

      <Card elevation={6} style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Academics userData={userData} setUserData={setUserData} />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <ExtraCurriculars userData={userData} setUserData={setUserData} />
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Achievements userData={userData} setUserData={setUserData} />
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <Score setToggleState={setToggleState} />
          </div>
          {toggleState > 3 ? null : (
            <div className="d-flex justify-content-between  mx-3 my-5">
              {toggleState < 2 ? null : (
                <div
                  className="nextBackButton"
                  onClick={() => {
                    setToggleState((prevActiveStep) => prevActiveStep - 1);
                  }}
                >
                  Back
                </div>
              )}
              {toggleState === 3 ? (
                <button className="nextBackButton" onClick={handleSubmit}>
                  View Score
                </button>
              ) : (
                <div
                  className="nextBackButton"
                  onClick={() => {
                    setToggleState((prevActiveStep) => prevActiveStep + 1);
                  }}
                >
                  Next
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Evaluate;
