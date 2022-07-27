import { Typography } from "@mui/material";

const UnderSSC = () => {
  return (
    <div>
      <>
        <div className="programsOffer pb-5">
          <Typography
            style={{ padding: "20px 10px", color: "black", fontWeight: "bold" }}
            variant="h6"
            align="center"
          >
            Sorry!
          </Typography>

          <Typography
            style={{ padding: "20px 10px", color: "black", fontWeight: "bold" }}
            align="center"
          >
            You are not eligible to apply here.
          </Typography>
        </div>
      </>
    </div>
  );
};

export default UnderSSC;
