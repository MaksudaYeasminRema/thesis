import React from "react";
import Evaluate from "../evaluateComponents/Evaluate";
import { Card, Typography, Grid } from "@mui/material";

const EvaluateMe = () => {
  return (
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <Card
          elevation={6}
          style={{ marginBottom: "2rem", margin: "2rem 1rem" }}
        >
          <Typography
            style={{
              fontSize: "25px",
              margin: "2rem",
              fontWeight: "bold",
              color: "black",
            }}
            align="center"
          >
            Evaluate Your Profile
          </Typography>
        </Card>

        <Grid style={{ margin: "0 1rem" }}>
          <Evaluate />
        </Grid>
      </div>
    </div>
  );
};

export default EvaluateMe;
