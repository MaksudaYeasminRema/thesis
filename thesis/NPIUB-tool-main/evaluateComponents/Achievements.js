import React, { useState } from "react";

import { Grid, Typography } from "@mui/material";

const Achievements = ({ userData, setUserData }) => {
  const { achievements, volunteerAchievements } = userData;

  const [achievementsTypes, setAchievementsTypes] = useState("");

  const [volunteerAchievementsTypes, setVolunteerAchievementsTypes] = useState(
    []
  );

  const getAchievementsTypes = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAchievementsTypes([...achievementsTypes, value]);
    } else {
      setAchievementsTypes(achievementsTypes.filter((e) => e !== value));
    }
  };
  const getVolunteerAchievements = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setVolunteerAchievementsTypes([...volunteerAchievementsTypes, value]);
    } else {
      setVolunteerAchievementsTypes(
        volunteerAchievementsTypes.filter((e) => e !== value)
      );
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <Typography
        style={{ padding: "20px 10px", color: "black", fontWeight: "bold" }}
        variant="h6"
        align="center"
      >
        Achievements
      </Typography>

      <div className="custom-form mt-4 mr-3 ml-1">
        <h6 className="ms-2"> Do you have any academic achievements? *</h6>
        <div className="select-wrapper">
          <Grid container>
            <select
              required
              className="formSelect"
              variant="outlined"
              select
              id="achievements"
              name="achievements"
              value={achievements}
              onChange={handleInput}
            >
              <option value="" selected disabled>
                Please choose...
              </option>
              <option value="5">Yes</option>
              <option value="1">No</option>
            </select>
          </Grid>
        </div>
      </div>
      {achievements === "5" && (
        <div className="custom-form mt-4 mr-3 ml-1">
          <h6 className="ms-2">
            {" "}
            Whay type of academic achievements do you have?*
          </h6>
          <div className="">
            <div className="checkboxContainer">
              <input
                className="ecCheckbox"
                type="checkbox"
                value="Scholarship"
                onChange={(e) => getAchievementsTypes(e)}
              />
              Scholarship
              <input
                className="ecCheckbox"
                type="checkbox"
                value="Award"
                onChange={(e) => getAchievementsTypes(e)}
              />
              Award
              <input
                className="ecCheckbox"
                type="checkbox"
                value="Project"
                onChange={(e) => getAchievementsTypes(e)}
              />
              Project
              <input
                className="ecCheckbox"
                type="checkbox"
                value="Publication"
                onChange={(e) => getAchievementsTypes(e)}
              />
              Publication
            </div>
          </div>
        </div>
      )}
      <div className="custom-form mt-4 mr-3 ml-1">
        <h6 className="ms-2"> Do you have any volunteer achievements? *</h6>
        <div className="select-wrapper">
          <Grid container>
            <select
              required
              className="formSelect"
              variant="outlined"
              select
              id="volunteerAchievements"
              name="volunteerAchievements"
              value={volunteerAchievements}
              onChange={handleInput}
            >
              <option value="" selected disabled>
                Please choose...
              </option>
              <option value="5">Yes</option>
              <option value="1">No</option>
            </select>
          </Grid>
        </div>
      </div>
      {volunteerAchievements === "5" && (
        <div className="custom-form mt-4 mr-3 ml-1">
          <h6 className="ms-2">
            {" "}
            What type of volunteer achievements do you have? *
          </h6>
          <div className="">
            <div className="checkboxContainer">
              <input
                className="ecCheckbox"
                type="checkbox"
                value="Award"
                onChange={(e) => getVolunteerAchievements(e)}
              />
              Award
              <input
                className="ecCheckbox"
                type="checkbox"
                value="Won competitions"
                onChange={(e) => getVolunteerAchievements(e)}
              />
              Won competitions
              <input
                className="ecCheckbox"
                type="checkbox"
                value="Participated competitions"
                onChange={(e) => getVolunteerAchievements(e)}
              />
              Participated competitions
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
