import { yearData, boardData, facultyData } from "./data2";
import { Grid, Typography } from "@mui/material";

const Academics = ({ userData, setUserData }) => {
  const {
    study_level,
    bachelors_result,
    bachelors_dept,
    bachelors_institute,
    bachelors_pyear,
    faculty_name,
    ssc_result,
    ssc_group,
    ssc_roll,
    ssc_reg,
    ssc_board,
    ssc_pyear,
    hsc_result,
    hsc_group,
    hsc_roll,
    hsc_reg,
    hsc_board,
    hsc_pyear,
    diploma_result,
    diploma_dept,
    diploma_institute,
    diploma_pyear,
  } = userData;

  const boards = boardData.map((name) => (
    <option key={name} value={name}>
      {name}
    </option>
  ));
  const years = yearData.map((name) => (
    <option key={name} value={name}>
      {name}
    </option>
  ));

  const faculties = facultyData.map((faculty) => (
    <option key={faculty.name} value={faculty.name}>
      {faculty.name}
    </option>
  ));

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  function getFormComponent(study_level) {
    switch (study_level) {
      case "Under SSC":
        return <></>;
      case "SSC":
        return (
          <>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your SSC group *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_group"
                    name="ssc_group"
                    value={ssc_group}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected="selected">
                      SSC group
                    </option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> SSC GPA: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_result"
                  name="ssc_result"
                  value={ssc_result}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> SSC Roll: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_roll"
                  name="ssc_roll"
                  value={ssc_roll}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> SSC Registration Number: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_reg"
                  name="ssc_reg"
                  value={ssc_reg}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your SSC Board: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_board"
                    name="ssc_board"
                    value={ssc_board}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      SSC board
                    </option>
                    {boards}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2"> Select your SSC passing year: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_pyear"
                    name="ssc_pyear"
                    value={ssc_pyear}
                    type="number"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      SSC passing year
                    </option>
                    {years}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">
                {" "}
                Which faculty do you want to study in? *
              </h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="faculty_name"
                    name="faculty_name"
                    value={faculty_name}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      Please select...
                    </option>
                    <option value="Faculty of Engineering">
                      Faculty of Engineering
                    </option>
                    <option value="General faculty">General faculty</option>
                  </select>
                </Grid>
              </div>
            </div>
          </>
        );
      case "HSC":
        return (
          <>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your SSC group *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_group"
                    name="ssc_group"
                    value={ssc_group}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected="selected">
                      SSC group
                    </option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> SSC GPA: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_result"
                  name="ssc_result"
                  value={ssc_result}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> SSC Roll: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_roll"
                  name="ssc_roll"
                  value={ssc_roll}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> SSC Registration Number: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_reg"
                  name="ssc_reg"
                  value={ssc_reg}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your SSC Board: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_board"
                    name="ssc_board"
                    value={ssc_board}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      SSC board
                    </option>
                    {boards}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2"> Select your SSC passing year: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_pyear"
                    name="ssc_pyear"
                    value={ssc_pyear}
                    type="number"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      SSC passing year
                    </option>
                    {years}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your HSC group *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="hsc_group"
                    name="hsc_group"
                    value={hsc_group}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected="selected">
                      HSC group
                    </option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> HSC GPA: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="hsc_result"
                  name="hsc_result"
                  value={hsc_result}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> HSC Roll: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="hsc_roll"
                  name="hsc_roll"
                  value={hsc_roll}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> HSC Registration Number: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="hsc_reg"
                  name="hsc_reg"
                  value={hsc_reg}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your HSC Board: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="hsc_board"
                    name="hsc_board"
                    value={hsc_board}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      HSC board
                    </option>
                    {boards}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2"> select your HSC passing year: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="hsc_pyear"
                    name="hsc_pyear"
                    value={hsc_pyear}
                    type="number"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      HSC passing year
                    </option>
                    {years}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">
                {" "}
                Which faculty do you want to study in? *
              </h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="faculty_name"
                    name="faculty_name"
                    value={faculty_name}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      Please select...
                    </option>
                    {faculties}
                  </select>
                </Grid>
              </div>
            </div>
          </>
        );
      case "Diploma":
        return (
          <>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your SSC group *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_group"
                    name="ssc_group"
                    value={ssc_group}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected="selected">
                      SSC group
                    </option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> Enter your SSC GPA *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_result"
                  name="ssc_result"
                  value={ssc_result}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> Enter your SSC Roll *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_roll"
                  name="ssc_roll"
                  value={ssc_roll}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> Enter your SSC registration number *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_reg"
                  name="ssc_reg"
                  value={ssc_reg}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your SSC Board: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_board"
                    name="ssc_board"
                    value={ssc_board}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      SSC board
                    </option>
                    {boards}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2"> Select your SSC passing year: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_pyear"
                    name="ssc_pyear"
                    value={ssc_pyear}
                    type="number"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      SSC passing year
                    </option>
                    {years}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> What was your department? *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="diploma_dept"
                  name="diploma_dept"
                  value={diploma_dept}
                  type="text"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> Enter your GPA *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="diploma_result"
                  name="diploma_result"
                  value={diploma_result}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> Institute Name: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="diploma_institute"
                  name="diploma_institute"
                  value={diploma_institute}
                  type="text"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2"> Year of passing: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="diploma_pyear"
                    name="diploma_pyear"
                    value={diploma_pyear}
                    type="number"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      Please choose...
                    </option>
                    {years}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">
                {" "}
                Which faculty do you want to study in? *
              </h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="faculty_name"
                    name="faculty_name"
                    value={faculty_name}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      Please select...
                    </option>
                    {faculties}
                  </select>
                </Grid>
              </div>
            </div>
          </>
        );
      case "Bachelors":
        return (
          <>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your SSC group *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_group"
                    name="ssc_group"
                    value={ssc_group}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected="selected">
                      SSC group
                    </option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> SSC GPA: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_result"
                  name="ssc_result"
                  value={ssc_result}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> SSC Roll: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_roll"
                  name="ssc_roll"
                  value={ssc_roll}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> SSC Registration Number: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="ssc_reg"
                  name="ssc_reg"
                  value={ssc_reg}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your SSC Board: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_board"
                    name="ssc_board"
                    value={ssc_board}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      SSC board
                    </option>
                    {boards}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2"> Select your SSC passing year: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="ssc_pyear"
                    name="ssc_pyear"
                    value={ssc_pyear}
                    type="number"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      SSC passing year
                    </option>
                    {years}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your HSC group *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="hsc_group"
                    name="hsc_group"
                    value={hsc_group}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected="selected">
                      HSC group
                    </option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> HSC GPA: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="hsc_result"
                  name="hsc_result"
                  value={hsc_result}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> HSC Roll: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="hsc_roll"
                  name="hsc_roll"
                  value={hsc_roll}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> HSC Registration Number: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="hsc_reg"
                  name="hsc_reg"
                  value={hsc_reg}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">Select your HSC Board: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="hsc_board"
                    name="hsc_board"
                    value={hsc_board}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      HSC board
                    </option>
                    {boards}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2"> select your HSC passing year: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="hsc_pyear"
                    name="hsc_pyear"
                    value={hsc_pyear}
                    type="number"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      HSC passing year
                    </option>
                    {years}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> What was your department? *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="bachelors_dept"
                  name="bachelors_dept"
                  value={bachelors_dept}
                  type="text"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> Enter your GPA *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="bachelors_result"
                  name="bachelors_result"
                  value={bachelors_result}
                  type="number"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6> Institute Name: *</h6>
              <Grid container>
                <input
                  rows="2"
                  required
                  className="inputEvaluate"
                  id="bachelors_institute"
                  name="bachelors_institute"
                  value={bachelors_institute}
                  type="text"
                  onChange={handleInput}
                />
              </Grid>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2"> Year of passing: *</h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="bachelors_pyear"
                    name="bachelors_pyear"
                    value={bachelors_pyear}
                    type="number"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      Please choose...
                    </option>
                    {years}
                  </select>
                </Grid>
              </div>
            </div>
            <div className="custom-form mt-4 mr-3 ml-1">
              <h6 className="ms-2">
                {" "}
                Which faculty do you want to study in? *
              </h6>
              <div className="select-wrapper">
                <Grid container>
                  <select
                    required
                    className="formSelect"
                    id="faculty_name"
                    name="faculty_name"
                    value={faculty_name}
                    type="text"
                    onChange={handleInput}
                  >
                    <option value="" disabled selected>
                      Please select...
                    </option>
                    {faculties}
                  </select>
                </Grid>
              </div>
            </div>
          </>
        );
      default:
        return "";
    }
  }

  return (
    <div>
      <Typography
        style={{ padding: "20px 10px", color: "black", fontWeight: "bold" }}
        variant="h6"
        align="center"
      >
        Academics
      </Typography>
      <div className="custom-form mt-4 mr-3 ml-1">
        <h6 className="ms-2"> Select your study level *</h6>
        <div className="select-wrapper">
          <Grid container>
            <select
              required
              className="formSelect"
              id="eduMedium"
              name="study_level"
              value={study_level}
              onChange={handleInput}
            >
              <option value="" selected disabled>
                Please select...
              </option>
              <option value="Under SSC">Under SSC</option>
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelors">Bachelors</option>
            </select>
          </Grid>
        </div>
      </div>
      {getFormComponent(study_level)}
    </div>
  );
};

export default Academics;
