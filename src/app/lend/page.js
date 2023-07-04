"use client";
import React, { useState } from "react";
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
} from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import LendingModal from "../components/lendingModal";
import Layout from "../layout";
import Header from "../components/header";
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
const data = [
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Ffsm5c8t31%2Fyq0mx1tgb-1200.webp",
    name: "Fuddies",
    available: "1676.48",
    bestOffer: "85",
    apy: "126%",
    duration: "7d",
    activeLoans: [
      { item: "20.83 ->21.272", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
    ],
    activeOffers: [
      { item: "20.83 ->", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
      { item: "20.83 -> 21.272", duration: "17 min ago" },
    ],
    floor: "100",
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2F16p8wip1j%2Fyyitz067ij-1200.webp",
    name: "AHOY",
    available: "2435.79",
    bestOffer: "18",
    apy: "125%",
    duration: "7d",
    activeLoans: [
      { item: "15.62 -> 16.024", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
    ],
    activeOffers: [
      { item: "15.62 ->", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
      { item: "15.62 -> 16.024", duration: "23 min ago" },
    ],
    floor: "20",
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fk7sw90vc6h%2Fq4mqra6hm-1200.webp",
    name: "Suishi",
    available: "1850.33",
    bestOffer: "2.5",
    apy: "110%",
    duration: "7d",
    activeLoans: [
      { item: "22.18 -> 22.665", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
    ],
    activeOffers: [
      { item: "22.18 ->", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
      { item: "22.18 -> 22.665", duration: "15 min ago" },
    ],
    floor: "3",
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Ftm7mo5pkz%2F94d75ls7i-1200.webp",
    name: "Cosmocadia",
    available: "3097.12",
    bestOffer: "30",
    apy: "123%",
    duration: "7d",
    activeLoans: [
      { item: "18.75 -> 19.125", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
    ],
    activeOffers: [
      { item: "18.75 ->", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
      { item: "18.75 -> 19.125", duration: "20 min ago" },
    ],
    floor: "35",
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fzak1c6u40f%2Ft2resswya-1200.webp",
    name: "Gommies",
    available: "2245.67",
    bestOffer: "25",
    apy: "113%",
    duration: "7d",
    activeLoans: [
      { item: "25.14 -> 25.646", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
    ],
    activeOffers: [
      { item: "25.14 ->", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
      { item: "25.14 -> 25.646", duration: "18 min ago" },
    ],
    floor: "26",
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Frn0zzhram%2Fun4tmt6h7-1200.webp",
    name: "Sips",
    available: "2750.41",
    bestOffer: "6",
    apy: "118%",
    duration: "7d",
    activeLoans: [
      { item: "16.92 -> 17.365", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
    ],
    activeOffers: [
      { item: "16.92 ->", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
      { item: "16.92 -> 17.365", duration: "22 min ago" },
    ],
    floor: "7",
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fy25d1z32u%2F4cl2ps8vxf-1200.webp",
    name: "Stork",
    available: "1983.29",
    bestOffer: "23",
    apy: "115%",
    duration: "7d",
    activeLoans: [
      { item: "23.45 -> 23.932", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
    ],
    activeOffers: [
      { item: "23.45 ->", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
      { item: "23.45 -> 23.932", duration: "17 min ago" },
    ],
    floor: "25",
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fqxt59j1i%2F16end4a7x-1200.webp",
    name: "Wizard Land",
    available: "1547.87",
    bestOffer: "25",
    apy: "132%",
    duration: "7d",
    activeLoans: [
      { item: "19.76 -> 20.244", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
    ],
    activeOffers: [
      { item: "19.76 ->", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
      { item: "19.76 -> 20.244", duration: "19 min ago" },
    ],
    floor: "7",
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2F1wwqec82%2Ftif9140gc-1200.webp",
    name: "Occoult Multipass",
    available: "3120.55",
    bestOffer: "6",
    apy: "120%",
    duration: "7d",
    activeLoans: [
      { item: "14.76 -> 15.129", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
    ],
    activeOffers: [
      { item: "14.76 ->", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
      { item: "14.76 -> 15.129", duration: "22 min ago" },
    ],
    floor: "7",
  },
  // Add more data items as needed
];

const IndexPage = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [items, setItems] = useState([]);

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
  }, [searchTerm]);

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
  const handleModal = (item) => {
    setItem(item);
    setIsModal(!isModal);
  };

  const loadBasketFromLocalStorage = () => {
    const basketItems = window.localStorage.getItem("basketItems");
    if (basketItems) {
      setItems(JSON.parse(basketItems));
    }
  };

  const classes = useStyles();
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
            Make loan offers on NFT collections.
          </Typography>
        </Box>

        <Box
          sx={{ width: "70%", marginLeft: 10, marginTop: 1, marginBottom: 3 }}
        >
          <Typography
            style={{
              fontSize: "20px",
            }}
          >
            Browse collections below, and name your price. The current best
            offer will be shown to borrowers. To take your offer, they lock in
            an NFT from that collection to use as collateral. You will be repaid
            at the end of the loan, plus interest. If they fail to repay, you
            get to keep the NFT.
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
              width: "100%",
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
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "transparent",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  onClick={() => handleSort("collection")}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#000",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Collection
                    {sortBy === "collection" && (
                      <Box component="span" ml={1}>
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </Box>
                    )}
                  </Box>
                </TableCell>
                <TableCell
                  onClick={() => handleSort("availablePool")}
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#000",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Available Pool
                    {sortBy === "availablePool" && (
                      <Box component="span" ml={1}>
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </Box>
                    )}
                  </Box>
                </TableCell>
                <TableCell
                  onClick={() => handleSort("bestOffer")}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#000",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Best Offer
                    {sortBy === "bestOffer" && (
                      <Box component="span" ml={1}>
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </Box>
                    )}
                  </Box>
                </TableCell>
                <TableCell
                  onClick={() => handleSort("APY")}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#000",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    APY
                    {sortBy === "APY" && (
                      <Box component="span" ml={1}>
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </Box>
                    )}
                  </Box>
                </TableCell>
                <TableCell
                  onClick={() => handleSort("duration")}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#000",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Duration
                    {sortBy === "duration" && (
                      <Box component="span" ml={1}>
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </Box>
                    )}
                  </Box>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item, index) => (
                <BootstrapTooltip
                  key={index}
                  title={
                    <Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          style={{
                            color: "#000",
                            fontSize: "24px",
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          {item?.name}
                        </Typography>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: 40,
                            backgroundColor: "#c5c5c5",
                            width: "100%",
                          }}
                        >
                          <Typography variant="subtitle1">
                            Active Loans
                          </Typography>
                          <Typography variant="subtitle2" sx={{ ml: 1 }}>
                            Taken
                          </Typography>
                        </Box>
                        <List>
                          {item.activeLoans.map((loan, loanIndex) => (
                            <ListItem key={`loan-${loanIndex}`}>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  height: 40,
                                  width: "100%",
                                }}
                              >
                                <Typography variant="subtitle1">
                                  {loan?.item}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ ml: 1 }}>
                                  {loan?.duration}
                                </Typography>
                              </Box>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: 40,
                            backgroundColor: "#c5c5c5",
                            width: "100%",
                          }}
                        >
                          <Typography variant="subtitle1">
                            Active Offers
                          </Typography>
                          <Typography variant="subtitle2" sx={{ ml: 1 }}>
                            Taken
                          </Typography>
                        </Box>{" "}
                        <List>
                          {item.activeOffers.map((offer, offerIndex) => (
                            <ListItem key={`offer-${offerIndex}`}>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  height: 40,
                                  width: "100%",
                                }}
                              >
                                <Typography variant="subtitle1">
                                  {offer?.item}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ ml: 1 }}>
                                  {offer?.duration}
                                </Typography>
                              </Box>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  }
                >
                  <TableRow
                    key={index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "#fff",
                          fontSize: "24px",
                        }}
                      >
                        <img
                          src={item.logo}
                          alt={item.collection}
                          style={{
                            width: "64px",
                            borderRadius: "64px",
                            marginRight: "15px",
                          }}
                        />
                        {item.name}
                      </Box>
                    </TableCell>
                    <TableCell
                      style={{
                        cursor: "pointer",
                        backgroundColor: "transparent",
                        color: "#fff",
                        fontSize: "24px",
                      }}
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#000",
                        },
                      }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <img
                          src="/image/sui.png"
                          style={{ width: "15px", height: "15px" }}
                        />
                        {item.available}
                      </Box>
                    </TableCell>
                    <TableCell
                      style={{
                        cursor: "pointer",
                        backgroundColor: "transparent",
                        color: "#fff",
                        fontSize: "24px",
                      }}
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#000",
                        },
                      }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <img
                          src="/image/sui.png"
                          style={{ width: "15px", height: "15px" }}
                        />{" "}
                        {item.bestOffer}
                      </Box>
                    </TableCell>
                    <TableCell
                      style={{
                        cursor: "pointer",
                        backgroundColor: "transparent",
                        color: "green",
                        fontSize: "24px",
                      }}
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#000",
                        },
                      }}
                    >
                      {item.apy}
                    </TableCell>
                    <TableCell
                      style={{
                        cursor: "pointer",
                        backgroundColor: "transparent",
                        color: "#fff",
                        fontSize: "24px",
                      }}
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#000",
                        },
                      }}
                    >
                      {item.duration}
                    </TableCell>
                    <TableCell
                      style={{
                        cursor: "pointer",
                        backgroundColor: "transparent",
                        color: "#fff",
                      }}
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <Button
                        onClick={() => handleModal(item)}
                        style={buttonStyle}
                        variant="contained"
                        sx={{
                          "&:hover": buttonHoverStyle,
                        }}
                      >
                        Lend
                      </Button>
                    </TableCell>
                  </TableRow>
                </BootstrapTooltip>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <LendingModal item={item} handleModal={handleModal} open={isModal} />
      </Box>
    </>
  );
};

export default IndexPage;
