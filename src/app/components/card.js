import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const FullWidthCard = styled(Card)({
  width: "90%",
});

const Cards = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FullWidthCard>
        <CardContent>
          <Typography variant="h5" component="div">
            Full Width Card
          </Typography>
          <Typography variant="body2">
            This card will occupy the full width of the screen.
          </Typography>
        </CardContent>
      </FullWidthCard>
    </div>
  );
};

export default Cards;
