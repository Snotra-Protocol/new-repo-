"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import ReactCardFlip from "react-card-flip";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import LendingModal from "../components/lendingModal";
import Layout from "../layout";
import Header from "../components/header";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  inputRoot: {
    borderRadius: "5px",
    "&.Mui-focused": {
      borderColor: "#506182",
    },
  },
  inputFocused: {
    "&:hover": {
      borderColor: "#506182",
    },
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#9c9c9c",
    width: 800,
  },
}));

const IndexPage = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const [data, setData] = useState([]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const buttonStyle = {
    borderImage: "linear-gradient(45deg, #F786EE, #767FFE) 30",
  };
  const buttonHoverStyle = {
    background: "linear-gradient(45deg, #F786EE, #767FFE) !important",
  };

  const filteredData = React.useMemo(() => {
    if (searchTerm) {
      return data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return data;
  }, [searchTerm, data]);

  const sortedData = React.useMemo(() => {
    if (sortBy) {
      const sortedArray = [...filteredData].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });

      return sortedArray;
    }

    return filteredData;
  }, [filteredData, sortBy, sortOrder]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [item, setItem] = useState();
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const basketItems = window.localStorage.getItem("basketItemsMortgage");
    if (basketItems) {
      setData(JSON.parse(basketItems));
    }
  }, []);

  const classes = useStyles();
  const [isFlip, setIsFlip] = useState();

  const GradientButton = styled(Button)(({ theme }) => ({
    background: "linear-gradient(45deg, #F786EE, #767FFE) !important",
    color: "#fff",
    width: 156,
    height: 46,
    padding: "14px 32px 14px 32px",
    borderRadius: "14px",
    border: "none",
    zIndex: 9999,
    cursor: "pointer",
    fontSize: "16px",
    visibility: "visible",
    fontSize: "10px",
    marginTop: 10,
    transition: "visibility 0.3s ease",
    "&.hidden": {
      visibility: "hidden",
    },
  }));

  return (
    <>
      <Header />
      <Box>
        <Box sx={{ marginLeft: 10, marginTop: 10 }}>
          <Typography
            variant="h1"
            style={{
              fontSize: "60px",
              fontWeight: "bold",
            }}
          >
            My Mortgage
          </Typography>
        </Box>
        <Box
          sx={{
            paddingLeft: 7,
            paddingRight: 7,
            marginBottom: 5,
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <TextField
            label="Search Collection"
            value={searchTerm}
            onChange={handleSearch}
            style={{
              margin: "10px",
              border: "1px solid #506182",
              backgroundColor: isScrolled ? "#000" : "transparent",
              width: "20%",
              color: "#506182",
              borderRadius: "5px",
              marginTop: isScrolled ? "1px" : "10px",
            }}
            InputLabelProps={{
              style: { color: "#506182" },
            }}
            InputProps={{
              style: { color: "#506182" },
              classes: {
                root: classes.inputRoot,
                focused: classes.inputFocused,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#506182" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grid container spacing={2} sx={{ marginLeft: 5 }}>
          {filteredData.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={5} lg={2} key={index}>
                <ReactCardFlip isFlipped={isFlip === index} infinite>
                  <div>
                    <Card
                      onClick={() => setIsFlip(index)}
                      sx={{
                        background: "#000",
                        width: "237px",
                        height: "353px",
                        border: "0.5px solid #fff",
                        "&:hover": {
                          border: "2px solid #fff",
                        },
                      }}
                    >
                      <CardContent>
                        <img src={item?.img} style={{ height: "200px" }} />
                        <Typography
                          sx={{ color: "#fff", marginTop: 2, fontSize: 15 }}
                        >
                          {item.name}
                        </Typography>
                        <Box
                          sx={{ background: "#fff", height: 1.5, margin: 1 }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Typography sx={{ color: "#5b5d61", fontSize: 15 }}>
                              Price
                            </Typography>
                            <Box display={"flex"} alignItems={"center"}>
                              <img
                                src="/image/sui.png"
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  marginRight: "5px",
                                }}
                              />
                              <Typography sx={{ color: "#fff", fontSize: 15 }}>
                                {item.price}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card
                      onClick={() => setIsFlip()}
                      sx={{
                        background: "#000",
                        width: "237px",
                        height: "353px",
                        border: "0.5px solid #fff",
                        "&:hover": {
                          border: "2px solid #fff",
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <PaidRoundedIcon
                          style={{
                            fontSize: 80,
                            color: "#767FFE",
                          }}
                        />

                        <Typography
                          style={{ color: "#fff", fontSize: 13 }}
                          variant="h6"
                        >
                          Mortgage Instantly for
                        </Typography>
                        <Box display={"flex"} alignItems={"center"}>
                          <img
                            src="/image/sui.png"
                            style={{
                              width: "20px",
                              height: "18px",
                              marginRight: "5px",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#fff",
                              fontSize: 24,
                              fontWeight: "bold",
                            }}
                          >
                            {item?.price}
                          </Typography>
                        </Box>
                        <GradientButton
                          onClick={() => {
                            setIsFlip(index);
                          }}
                        >
                          Repay Mortgage
                        </GradientButton>
                      </CardContent>
                    </Card>
                  </div>
                </ReactCardFlip>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default IndexPage;
