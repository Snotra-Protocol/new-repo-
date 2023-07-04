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
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";

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
const data = [
  {
    id: 1,
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Frn0zzhram%2Fun4tmt6h7-1200.webp",
    name: "Sips",
    floor: 4.44,
    volume: 3.29,
    Listed: "347/5 555",
    totalVolume: 23.63,
    nft: [
      {
        name: "#2398",
        price: 4.44,
        img: "https://shdw-drive.genesysgo.net/A8kprUB4GJBU3WohSQZuR3Jips2aEVVNXGWkmrgTJbsa/2398.png",
      },
      {
        name: "#2429",
        price: 4.44,
        img: "https://shdw-drive.genesysgo.net/A8kprUB4GJBU3WohSQZuR3Jips2aEVVNXGWkmrgTJbsa/2429.png",
      },
      {
        name: "#4948",
        price: 4.44,
        img: "https://shdw-drive.genesysgo.net/A8kprUB4GJBU3WohSQZuR3Jips2aEVVNXGWkmrgTJbsa/4948.png",
      },
      {
        name: "#4744",
        price: 4.44,
        img: "https://shdw-drive.genesysgo.net/A8kprUB4GJBU3WohSQZuR3Jips2aEVVNXGWkmrgTJbsa/4744.png",
      },
    ],
  },
  {
    id: 2,
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2Fy25d1z32u%2F4cl2ps8vxf-1200.webp",
    name: "Stork",
    floor: 25.0,
    volume: 168.79,
    Listed: "408/4 500",
    totalVolume: 20.13,
    nft: [
      {
        name: "#3771",
        price: 25.0,
        img: "https://cdn.clutchy.io/ipfs/bafybeidfs54ioohyumcli2tu4vbueczsf2guxy3zilevxmj3lvg42d5mry?img-quality=60&img-width=400&img-height=400",
      },
      {
        name: "#820",
        price: 25.0,
        img: "https://cdn.clutchy.io/ipfs/bafybeiaunylu3r7fwvaehenbyd7tfn73ne65th4huujuhguaewcvx3bf6a?img-quality=60&img-width=400&img-height=400",
      },
      {
        name: "#4071",
        price: 25.0,
        img: "https://cdn.clutchy.io/ipfs/bafybeifvo4nirlxyuqy7rslat2jzlc4rq724bhspyqugtusohr5m5oyjcq?img-quality=60&img-width=400&img-height=400",
      },
      {
        name: "#4462",
        price: 25.0,
        img: "https://cdn.clutchy.io/ipfs/bafybeialq27wlv7bmgicbpj5cvq2qk4vvgfjetkr6nfjblamhwbysaykpy?img-quality=60&img-width=400&img-height=400",
      },
    ],
  },
  {
    id: 3,
    logo: "https://storage.googleapis.com/clutchy-f128b.appspot.com/images%2F16p8wip1j%2Fyyitz067ij-1200.webp",
    name: "AHOY",
    floor: 18.88,
    volume: 268.82,
    Listed: "11/3 000",
    totalVolume: 17.64,
    nft: [
      {
        name: "#206",
        price: 18.88,
        img: "https://shdw-drive.genesysgo.net/3k7dzUPF56a41zSWfd1nYpTqjCex6LJxxoBaYgc7H55b/206.png",
      },
      {
        name: "#3036",
        price: 18.88,
        img: "https://shdw-drive.genesysgo.net/3k7dzUPF56a41zSWfd1nYpTqjCex6LJxxoBaYgc7H55b/3036.png",
      },
      {
        name: "#3310",
        price: 18.88,
        img: "https://shdw-drive.genesysgo.net/3k7dzUPF56a41zSWfd1nYpTqjCex6LJxxoBaYgc7H55b/3310.png",
      },
      {
        name: "#3534",
        price: 18.88,
        img: "https://shdw-drive.genesysgo.net/3k7dzUPF56a41zSWfd1nYpTqjCex6LJxxoBaYgc7H55b/3534.png",
      },
    ],
  },
];

const IndexPage = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [items, setItems] = useState([]);
  const router = useRouter();

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
            Explore Collections
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
                <Link href={`mortgage/${item?.id}`}>
                  <Card
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
                      <img src={item?.logo} style={{ height: "200px" }} />
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
                            Floor
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
                              {item.floor}
                            </Typography>
                          </Box>
                        </Box>

                        <Box>
                          <Typography sx={{ color: "#5b5d61", fontSize: 15 }}>
                            24h Volume
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
                            <Typography
                              sx={{
                                color: "#fff",
                                fontSize: 15,
                                textAlign: "right",
                              }}
                            >
                              {item.volume}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <LendingModal item={item} handleModal={handleModal} open={isModal} />
      </Box>
    </>
  );
};

export default IndexPage;
