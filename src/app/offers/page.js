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

  useEffect(() => {
    const basketItems = window.localStorage.getItem("basketItems");
    if (basketItems) {
      setData(JSON.parse(basketItems));
    }
  }, []);
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
  const [item, setItem] = useState();
  const [isModal, setIsModal] = useState(false);
  const handleModal = (item) => {
    setItem(item);
    setIsModal(!isModal);
  };

  const removeItem = (item) => {
    const basketItems = window.localStorage.getItem("basketItems");
    const _basketItems = JSON.parse(basketItems);
    const updateItem = _basketItems.filter((x) => x.name != item?.name);
    localStorage.setItem("basketItems", JSON.stringify(updateItem));
    setData(updateItem);
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
            My offers and contracts{" "}
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
            Once your offer is accepted by a borrower, a secure contract is
            created, freezing the NFT in their wallet. When the loan ends, you
            will get paid the total SUI (loan with interest). In the event of a
            default, you can foreclose, which transfers the collateral NFT to
            your wallet.
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
                    Offers
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
                    Interest
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
                    Status
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
              {filteredData?.map((item, index) => (
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
                          style={{ width: "15px", height: "15px" }}
                        />
                        {item.yourOffer}
                        <Typography sx={{ fontSize: 10, marginTop: "10px" }}>
                          (best)
                        </Typography>
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
                        {item.yourInt}
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
                      Seeking Borrowers
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
                        onClick={() => removeItem(item)}
                        style={buttonStyle}
                        variant="contained"
                        sx={{
                          "&:hover": buttonHoverStyle,
                        }}
                      >
                        Revoke
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
