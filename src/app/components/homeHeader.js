import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Icon } from "@iconify/react";
import { AiOutlineMedium } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { styled } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#fff !important",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    marginRight: 2,
  },
  navItem: {
    marginLeft: 3,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  socialIcons: {
    marginRight: 12,
  },
  header: {
    backgroundColor: "#fff !important",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    position: "fixed", // Yeni eklenen stil
    top: 0, // Yeni eklenen stil
    zIndex: 999, // Yeni eklenen stil
    width: "100%", // Yeni eklenen stil
  },
}));
const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #4CEDAF, #07B0E7) !important",
  color: "#fff",
  width: 156,
  height: 46,
  padding: "14px 32px 14px 32px",
  borderRadius: "33px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  visibility: "visible",
  fontSize: "10px",
  transition: "visibility 0.3s ease",
  "&.hidden": {
    visibility: "hidden",
  },
  container: {
    position: "relative",
    width: 200,
    height: 200,
  },
  imageContainer: {
    position: "absolute",
    top: "75px",
    right: "75px",
    width: "50%",
    height: "50%",
    animation: "$rotate 4s infinite linear",
  },
  rotatingImage: {
    borderRadius: "50%",
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));
const HomeHeader = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.header} // Yeni eklenen stil
      sx={{ backgroundColor: "#fff", boxShadow: "none" }}
    >
      <Toolbar>
        <img
          src="/image/snotra-logo-light.png"
          alt="Logo"
          className={classes.logo}
          style={{ width: "120px", height: "auto" }}
        />
        <Box
          sx={{
            flexGrow: 1,
            marginLeft: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              color: "#506182",
              fontSize: "13px",
              fontWeight: "medium",
              margin: "10px",
            }}
          >
            Home
          </Button>
          <Typography sx={{ fontSize: "13px", color: "#A4AEB8" }}>|</Typography>
          <Button
            sx={{
              color: "#506182",
              fontSize: "13px",
              fontWeight: "medium",
              margin: "10px",
            }}
          >
            NFT STAKING
          </Button>
          <Typography sx={{ fontSize: "13px", color: "#A4AEB8" }}>|</Typography>
          <Button
            href="/lend"
            sx={{
              color: "#506182",
              fontSize: "13px",
              fontWeight: "medium",
              margin: "10px",
            }}
          >
            NFT LENDING
          </Button>
          <Typography sx={{ fontSize: "13px", color: "#A4AEB8" }}>|</Typography>
          <Button
            sx={{
              color: "#506182",
              fontSize: "13px",
              fontWeight: "medium",
              margin: "10px",
            }}
          >
            DOCS
          </Button>
        </Box>
        <div className={classes.socialIcons}>
          <IconButton
            sx={{
              background: "#F2F3F7",
              height: "40px",
              width: "40px",
              marginRight: "20px",
            }}
          >
            <BsDiscord color="#8981FC" fontSize={20} />
          </IconButton>
          <IconButton
            sx={{
              background: "#F2F3F7",
              height: "40px",
              width: "40px",
              marginRight: "20px",
            }}
          >
            <TwitterIcon sx={{ color: "#8981FC", fontSize: "20px" }} />
          </IconButton>
          <IconButton
            sx={{
              background: "#F2F3F7",
              height: "40px",
              width: "40px",
              marginRight: "30px",
            }}
          >
            <AiOutlineMedium color="#8981FC" fontSize={20} />
          </IconButton>
        </div>
        <GradientButton   href="/lend">Try Demo</GradientButton>
      </Toolbar>
    </AppBar>
  );
};

export default HomeHeader;
