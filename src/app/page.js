"use client";
import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HomeHeader from "./components/homeHeader";
import { makeStyles } from "@mui/styles";
import { keyframes } from "@emotion/react";
import styles from "./ImageRotation.module.css";
import { Typography, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import LooksOutlined from "@mui/icons-material/LooksOutlined";
import Head from "next/head";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: 200,
    height: 200,
  },
  rotatingImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    animation: `${spinAnimation} 2s linear infinite`,
  },
}));
const GradientTypography = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(to right, #F786EE, #767FFE)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "90px",
  width: "70%",
}));
export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Snotra</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <meta name="description" content={`Snotra`} />
        <meta name="theme-color" content="#000000" />{" "}
        {/* Dark mode tema rengi */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <HomeHeader />
      <body style={{ background: "#F2F3F7", height: "90%", width: "100%" }}>
        <div className={styles.container}>
          <img src="/image/circle.png" alt="Rotating Image" />
        </div>
        <Box sx={{ width: "80%", marginLeft: "100px", marginTop: "40px" }}>
          <GradientTypography>
            The Liqudity Layer Of MOVE NFTs
          </GradientTypography>
        </Box>
        <Box sx={{ marginTop: "38px", marginLeft: "100px" }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "33%" }}>
            <img
              src="/image/home.png"
              style={{ height: "36px", width: "36px", marginRight: "54px" }}
            />
            <Box>
              <Typography
                sx={{ color: "#767FFE", fontWeight: "bold", fontSize: 21 }}
              >
                Mortgage
              </Typography>
              <Typography
                sx={{ color: "#506182", fontWeight: "medium", fontSize: 16 }}
              >
                Snotra allows innovative mortgage-based “buy now, pay later”
                feature that enables users to buy NFTs up to x10 leverage
                powered by a next generation decentralized perpetual order book
                market.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={1} marginTop={"40px"}>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
                width: "90%",
              }}
            >
              <img
                src="/image/gallery-tick.png"
                style={{ height: "36px", width: "36px", marginRight: "54px" }}
              />
              <Box>
                <Typography
                  sx={{ color: "#767FFE", fontWeight: "bold", fontSize: 21 }}
                >
                  Lend
                </Typography>
                <Typography
                  sx={{ color: "#506182", fontWeight: "medium", fontSize: 16 }}
                >
                  Snotra is a P2P lending protocol where owners can loan out
                  their Dynamic NFTs to lenders in exchange for collateral,
                  creating a new way to liquidity in the digital space.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "100px",
                width: "75%",
              }}
            >
              <img
                src="/image/lock.png"
                style={{ height: "36px", width: "36px", marginRight: "54px" }}
              />
              <Box>
                <Typography
                  sx={{ color: "#767FFE", fontWeight: "bold", fontSize: 21 }}
                >
                  Stake
                </Typography>
                <Typography
                  sx={{ color: "#506182", fontWeight: "medium", fontSize: 16 }}
                >
                  Snotra is a highly flexible and versatile protocol for earning
                  passive income by staking their dynamic NFTs & Gaming Assets.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </body>
    </>
  );
}
