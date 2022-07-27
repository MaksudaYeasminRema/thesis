import { createContext, useState } from "react";

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
  ECactivities: "",
  volunteerActivities: "",
  achievements: "",
  volunteerAchievements: "",
  program: "",
};

export const Context = createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
