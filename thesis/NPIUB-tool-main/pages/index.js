import Link from "next/link";
import { Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="homePage col">
        <div className="row mx-3">
          <Typography
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginTop: "3rem",
              color: "black",
            }}
            align="center"
          >
            Want to know which programs are the best suited for you?
          </Typography>
        </div>
        <div className="row">
          <Typography
            style={{
              fontSize: "20px",
              marginTop: "2rem",
              fontWeight: "bold",
              color: "black",
            }}
            align="center"
          >
            Get evaluated on
          </Typography>
        </div>
        <div className="row">
          <Grid
            style={{ marginTop: "10px", paddingBottom: "5px" }}
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
              sm={12}
              md={4}
              lg={4}
              xs={12}
            >
              <div className="activeAcademicTab">
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
              sm={12}
              md={4}
              lg={4}
              xs={12}
            >
              <div className="activeExtraTab">
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
              sm={12}
              md={4}
              lg={4}
              xs={12}
            >
              <div className="activeAchievementTab">
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
          </Grid>
        </div>
        <div className="row">
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "3rem",
              color: "black",
            }}
            align="center"
          >
            The Most Comprehensive Profile Evaluation Tool
          </Typography>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="evaluateIcon"></div>
          </div>
          <div className="col-12 col-md-6 px-2 py-5 py-md-0 d-flex align-items-center justify-content-center">
            <ul className="mx-5">
              <li
                style={{ fontWeight: "bold", color: "black", fontSize: "16px" }}
              >
                Understand your Profile Strengths
              </li>

              <li
                style={{ fontWeight: "bold", color: "black", fontSize: "16px" }}
              >
                Get a program list based on your profile
              </li>
              <li
                style={{ fontWeight: "bold", color: "black", fontSize: "16px" }}
              >
                Get a scholarship list according to your profile
              </li>
            </ul>
          </div>
          <div className="col d-flex align-items-center justify-content-center my-3">
            <Link href="/evaluateMe">
              <a>
                <button className="nextBackButton">Evaluate me</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
