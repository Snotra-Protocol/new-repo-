"use client";
import React, { useEffect, useState } from "react";
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
import RepayModal from "../components/repayModal";
import ExtendModal from "../components/extendModal";
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
  const [data, setData] = useState([]);

  const [item, setItem] = useState();
  const [isModal, setIsModal] = useState(false);
  const [extendModal, setExtendModal] = useState(false);
  useEffect(() => {
    getBasket();
  }, []);

  const getBasket = () => {
    const basketItems = window.localStorage.getItem("basketItemsBorrow");
    if (basketItems) {
      setData(JSON.parse(basketItems));
    }
  };
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
  const handleModal = (item) => {
    setItem(item);
    setIsModal(!isModal);
    getBasket();
  };

  const handleExtendModal = (item) => {
    setItem(item);
    setExtendModal(!extendModal);
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
            My loans
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
            Here are the NFTs you borrowed against. You must pay these in full
            by the expiration date in order to keep your NFT.
          </Typography>
        </Box>
        <Box sx={{ marginLeft: 10, marginBottom: 5, display: "flex" }}>
          <Box
            sx={{
              width: "15%",
              padding: 2,
              background: "#000",
              boxShadow: "0 4px 6px -1px rgba(255,255,255,.2)",
            }}
          >
            <Typography>TOTAL ACTIVE LOANS</Typography>
            <Typography>{filteredData.length}</Typography>
          </Box>
          <Box
            sx={{
              width: "15%",
              padding: 2,
              background: "#000",
              boxShadow: "0 4px 6px -1px rgba(255,255,255,.2)",
              marginLeft: 10,
            }}
          >
            <Typography sx={{ fontSize: "12px", opacity: 0.5 }}>
              TOTAL BORROWED
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              {" "}
              <img
                src="/image/sui.png"
                style={{ width: "15px", height: "15px" }}
              />
              {data[0]?.bestOffer}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "20%",
              padding: 2,
              background: "#000",
              boxShadow: "0 4px 6px -1px rgba(255,255,255,.2)",
              marginLeft: 10,
            }}
          >
            <Typography>TOTAL INTEREST OWED</Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              {" "}
              <img
                src="/image/sui.png"
                style={{ width: "15px", height: "15px" }}
              />
              {(data[0]?.bestOffer / 100) * 4}
            </Typography>
          </Box>
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
                    Borrowed
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
                    Term
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
                    Repayment
                    {sortBy === "APY" && (
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
              {filteredData?.map((item, index) => (
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
                      {item.bestOffer}
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
                    <Typography>6d Remaining</Typography>
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
                    <Box display={"flex"}>
                      <img
                        src="/image/sui.png"
                        style={{ width: "15px", height: "15px", marginTop: 10 }}
                      />
                      <Box>
                        {(item.bestOffer * 1.04).toFixed(2)}
                        <Typography style={{ fontSize: "8px" }}>
                          {(item.bestOffer / 100) * 4} SUI total interest
                        </Typography>
                      </Box>
                    </Box>
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
                      Repay
                    </Button>

                    <Button
                      onClick={() => handleExtendModal(item)}
                      style={buttonStyle}
                      variant="contained"
                      sx={{
                        "&:hover": buttonHoverStyle,
                      }}
                    >
                      Extend
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <RepayModal item={item} handleModal={handleModal} open={isModal} />
        <ExtendModal
          item={item}
          handleModal={handleExtendModal}
          open={extendModal}
        />
      </Box>
    </>
  );
};

export default IndexPage;
