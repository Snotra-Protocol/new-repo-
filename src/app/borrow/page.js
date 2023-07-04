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
import BorrowModal from "../components/borrowModal";
import BorrowSuccessModal from "../components/borrowSuccesModal";
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
    apy: "20",
    duration: "7d",
    floor: 100
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2F16p8wip1j%2Fyyitz067ij-1200.webp",
    name: "AHOY",
    available: "2000.00",
    bestOffer: "18",
    apy: "5",
    duration: "7d",
    floor: 20
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fk7sw90vc6h%2Fq4mqra6hm-1200.webp",
    name: "Suishi",
    available: "1500.75",
    bestOffer: "2.5",
    apy: "10",
    duration: "7d",
    floor: 3
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Ftm7mo5pkz%2F94d75ls7i-1200.webp",
    name: "Cosmocadia",
    available: "1750.30",
    bestOffer: "30",
    apy: "15",
    duration: "7d",
    floor: 35
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fzak1c6u40f%2Ft2resswya-1200.webp",
    name: "Gommies",
    available: "1800.92",
    bestOffer: "25",
    apy: "2",
    duration: "7d",
    floor: 26
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Frn0zzhram%2Fun4tmt6h7-1200.webp",
    name: "Sips",
    available: "1900.60",
    bestOffer: "6",
    apy: "40",
    duration: "7d",
    floor: 7
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fy25d1z32u%2F4cl2ps8vxf-1200.webp",
    name: "Stork",
    available: "1550.25",
    bestOffer: "23",
    apy: "10",
    duration: "7d",
    floor: 25
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fqxt59j1i%2F16end4a7x-1200.webp",
    name: "Wizard Land",
    available: "1980.20",
    bestOffer: "25",
    apy: "25",
    duration: "7d",
    floor: 27
  },
  {
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2F1wwqec82%2Ftif9140gc-1200.webp",
    name: "Occoult Multipass",
    available: "1700.85",
    bestOffer: "6",
    apy: "30",
    duration: "7d",
    floor: 7
  },
  // Add more data items as needed
];

const IndexPage = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [succesModal, setSuccessModal] = useState(false);
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
  const [items, setItem] = useState();
  const [isModal, setIsModal] = useState(false);
  const handleModal = (item) => {
    setItem(item);
    setIsModal(!isModal);
    if (isModal === true) {
      setSuccessModal(true);
      setItem(items);
    }
  };

  const handleSuccesModal = (item) => {
    setSuccessModal(false);
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
            Borrow against my NFTs
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
            Instantly take a loan against your NFTs. Escrow-free loans allows
            you to keep the collateral NFT in your wallet. When you accept a
            loan offer, a secure contract is created, freezing the NFT in- Not
            repaying by the due date means the lender can repossess your NFT.
            Successfully pay the loan in full by the expiration date to
            automatically thaw the NFT.
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
                    Interest
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
                        style={{
                          width: "15px",
                          height: "15px",
                          marginRight: "5px",
                        }}
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
                      {" "}
                      <img
                        src="/image/sui.png"
                        style={{
                          width: "15px",
                          height: "15px",
                          marginRight: "5px",
                        }}
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
                    <Box display={"flex"} alignItems={"center"}>
                      <img
                        src="/image/sui-green.png"
                        style={{
                          width: "15px",
                          height: "15px",
                          marginRight: "5px",
                        }}
                      />
                      {item.apy}
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
                        color: "#000",
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
                      Borrow
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <BorrowModal item={items} handleModal={handleModal} open={isModal} />
        <BorrowSuccessModal
          item={items}
          handleModal={handleSuccesModal}
          open={succesModal}
        />
      </Box>
    </>
  );
};

export default IndexPage;
