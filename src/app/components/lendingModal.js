import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LooksOutlined from "@mui/icons-material/LooksOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
  disabledTextField: {
    "& .MuiInputBase-root.Mui-disabled": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-disabled": {
      color: "#fff",
    },
  },
}));
const LendingModal = ({ item, handleModal, open }) => {
  const classes = useStyles();
  const [selectedButton, setSelectedButton] = React.useState(null);
  const [offerAmount, setOfferAmount] = useState(0);
  const [totalIns, setTotalIns] = useState(0);
  const [items, setItems] = useState([]);
  const [success, setIsSuccess] = useState(false);

  const loadBasketFromLocalStorage = () => {
    const basketItems = window.localStorage.getItem("basketItems");
    if (basketItems) {
      setItems(JSON.parse(basketItems));
    }
  };

  // Sepeti localStorage'a kaydetme işlevi
  const saveBasketToLocalStorage = () => {
    window.localStorage.setItem("basketItems", JSON.stringify(items));
  };
  const addItemToBasket = (item) => {
    item.yourOffer = offerAmount;
    item.yourInt = totalIns
    setItems((prevItems) => [...prevItems, item]);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      handleModal();
    }, 1000);
  };

  useEffect(() => {
    if (items?.length > 0) {
      saveBasketToLocalStorage();
    }
  }, [items]);

  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
  };
  const changeOffer = (event) => {
    const ins = (event.target.value * 4) / 100;
    setOfferAmount(event.target.value);
    setTotalIns(ins);
  };

  const buttonHoverStyle = {
    background: "linear-gradient(45deg, #F786EE, #767FFE) !important",
    width: "100%",
    padding: 2,
  };
  return (
    <>
      <Modal
        style={{ background: "rgba(255,255,255, 0.4)" }}
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            height: "99%",
            transform: "translate(-50%, -50%)",
            width: 400,
            background: "#000",
            borderRadius: "8px",
            p: 3,
          }}
        >
          <img src="https://dummyimage.com/400x200/fff/000" />
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              display: "flex",
              marginTop: -5,
            }}
          >
            <Box
              sx={{
                background: "#000",
                height: "94px",
                width: "94px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                borderRadius: "94px",
              }}
            >
              {success ? (
                <CheckCircleIcon style={{ fontSize: 64, color: "green" }} />
              ) : (
                <img
                  src={item?.logo}
                  style={{
                    height: "64px",
                    width: "64px",
                    borderRadius: "64px",
                  }}
                />
              )}
            </Box>
          </Box>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            {item?.name}
          </Typography>
          <Box display="flex" justifyContent="space-between" marginTop={3}>
            <Typography style={{ fontSize: "11px" }}>APY</Typography>
            <Typography style={{ fontSize: "11px" }}>DURATION</Typography>
            <Typography style={{ fontSize: "11px" }}>FLOOR</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "green",
              }}
            >
              {item?.apy}
            </Typography>
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "bold",

                marginRight: 10,
              }}
            >
              {item?.duration}
            </Typography>
            <Box>
              <Typography
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                {item?.floor}
              </Typography>
              <Typography
                style={{
                  fontSize: "8px",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                Updated 5m Ago
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              height: 1,
              width: "100%",
              background: "#f9f9f9",
              opacity: 0.5,
            }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom={2}
            marginTop={3}
          >
            <Typography style={{ fontSize: "20px" }}>Offer Amount</Typography>
            <Typography style={{ fontSize: "20px" }}>Total Interest</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" marginBottom={2}>
            <Box>
              <TextField
                onChange={(event) => {
                  changeOffer(event);
                }}
                type="number"
                style={{
                  margin: "10px",

                  color: "#506182",
                  borderRadius: "5px",
                }}
                InputLabelProps={{
                  style: { color: "#506182" },
                }}
                InputProps={{
                  inputProps: {
                    inputMode: "numeric",
                    step: "any", // İsteğe bağlı, ondalık sayıları da desteklemek için
                  },
                  style: { color: "#ffff" },
                  classes: {
                    root: classes.inputRoot,
                    focused: classes.inputFocused,
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src="/image/sui.png"
                        style={{ width: "20px", height: "15px" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Box>
                <Typography
                  style={{
                    fontSize: "8px",
                    opacity: 0.5,
                    marginLeft: 10,
                    display: "flex",
                  }}
                >
                  Best Offer:{" "}
                  <img
                    src="/image/sui.png"
                    style={{ width: "10px", height: "10px" }}
                  />{" "}
                  {item?.bestOffer}
                </Typography>
              </Box>
            </Box>
            <Box>
              <TextField
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#fff",
                  },
                }}
                className={classes.disabledTextField}
                value={totalIns}
                disabled
                style={{
                  margin: "10px",

                  color: "#506182",
                  borderRadius: "5px",
                }}
                InputLabelProps={{
                  style: { color: "#506182" },
                }}
                InputProps={{
                  shrink: true,
                  style: { color: "#fff" },

                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src="/image/sui.png"
                        style={{ width: "20px", height: "15px" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              <Typography
                style={{
                  fontSize: "8px",
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              />
            </Box>
          </Box>
          <Typography style={{ fontSize: "20px" }}>Number of Offers</Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom={2}
            marginTop={3}
          >
            <Button
              sx={{
                borderColor: selectedButton === 1 ? "#FE4B4A" : "gray",
                color: selectedButton === 1 ? "#FE4B4A" : "gray",
                "&:hover": {
                  borderColor: "#FE4B4A",
                },
              }}
              variant={"outlined"}
              onClick={() => handleButtonClick(1)}
            >
              1
            </Button>
            <Button
              sx={{
                borderColor: selectedButton === 2 ? "#FE4B4A" : "gray",
                color: selectedButton === 2 ? "#FE4B4A" : "gray",
                "&:hover": {
                  borderColor: "#FE4B4A",
                },
              }}
              variant={"outlined"}
              onClick={() => handleButtonClick(2)}
            >
              2
            </Button>
            <Button
              sx={{
                borderColor: selectedButton === 3 ? "#FE4B4A" : "gray",
                color: selectedButton === 3 ? "#FE4B4A" : "gray",
                "&:hover": {
                  borderColor: "#FE4B4A",
                },
              }}
              variant={"outlined"}
              onClick={() => handleButtonClick(3)}
            >
              3
            </Button>
          </Box>
          <Typography
            style={{
              fontSize: "15px",
              color: "gray",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Your total is{" "}
            <img
              src="/image/sui.png"
              style={{
                width: "10px",
                height: "10px",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
            {offerAmount}
          </Typography>
          <Typography
            style={{
              fontSize: "10px",
              textAlign: "center",
              color: "gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            You have{" "}
            <img
              src="/image/sui.png"
              style={{
                width: "10px",
                height: "10px",
                marginLeft: 5,
                marginRight: 5,
              }}
            />{" "}
            3.04{" "}
          </Typography>
          <Box
            marginTop={1}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button
              onClick={() => addItemToBasket(item)}
              sx={buttonHoverStyle}
              variant="contained"
            >
              Place Offer
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default LendingModal;
