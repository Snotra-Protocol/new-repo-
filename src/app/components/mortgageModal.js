import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Checkbox,
  Slider,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { withStyles } from "@mui/styles";
import Brightness2RoundedIcon from "@mui/icons-material/Brightness2Rounded";
const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: "rgba(255,255,255, 0.4)";
`;

const ModalContent = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30%;
  background-color: #000;
  padding: 1rem;
`;

const styles = {
  root: {
    "&$checked": {
      color: "#ADD8E6", // Seçili olduğunda kullanılacak renk
    },
  },
  checked: {},
};
const MyCheckbox = withStyles(styles)(({ classes }) => (
  <Checkbox
    classes={{
      root: classes.root,
      checked: classes.checked,
    }}
    disabled
    checked={true}
    color="default"
    inputProps={{ "aria-label": "demo checkbox" }}
  />
));

const MortgageModal = ({ item, handleModal, open }) => {
  const [items, setItems] = useState([]);
  const [sliderValue, setSliderValue] = useState(1);
  const [firstPrice, setPricePrice] = useState();
  const [secondsPrice, setSecondsPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const changePayment = () => {
    const stablePrice = item?.price + 2.07;
    const firstPay = stablePrice / sliderValue;
    const secondPay = stablePrice - firstPay;
    setPricePrice(firstPay.toFixed(2));
    setSecondsPrice(secondPay.toFixed(2));
    setTotalPrice(stablePrice.toFixed(2));
  };

  useEffect(() => {
    changePayment();
  }, [sliderValue]);

  useEffect(() => {
    changePayment();
  }, [open]);
  const addItemToBasket = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    setTimeout(() => {
      handleModal();
    }, 1000);
  };

  useEffect(() => {
    if (items.length > 0) {
      saveBasketToLocalStorage();
    }
  }, [items]);

  const saveBasketToLocalStorage = () => {
    window.localStorage.setItem("basketItemsMortgage", JSON.stringify(items));
  };

  if (!item) return null;
  const buttonHoverStyle = {
    background: "linear-gradient(45deg, #F786EE, #767FFE) !important",
    width: "50%",
    padding: 2,
  };
  if (item?.price === undefined) return null;
  item.firstPay = firstPrice;
  item.secondPay = secondsPrice;
  item.totalPrice = totalPrice;
  return (
    <>
      <StyledModal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src={item?.img}
                style={{
                  height: "64px",
                  width: "64px",
                  borderRadius: "64px",
                }}
              />
              <Box>
                <Typography sx={{ marginLeft: 2 }} variant="h6">
                  {item?.name}
                </Typography>

                <Typography sx={{ marginLeft: 2 }} variant="h6">
                  {item?.collection}
                </Typography>
              </Box>
            </Box>
            <CloseIcon />
          </Box>

          <Box
            sx={{
              marginTop: 5,
            }}
          >
            <Typography variant="body2" align="center">
              Adjust Leverage {sliderValue}x
            </Typography>
            <Slider
              value={sliderValue}
              min={1}
              max={10}
              onChange={(event, newValue) => setSliderValue(newValue)}
              aria-label="Slider"
            />
          </Box>
          <Typography variant="h6">Payment Schedule</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                style={{
                  background: "#F2F3F7",
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Brightness2RoundedIcon
                  style={{ color: "#8981FC", marginLeft: 5, fontSize: 22 }}
                />
              </Box>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>1st Payment</Typography>
                <Typography
                  sx={{
                    background: "#fff",
                    color: "#000",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Due Today
                </Typography>
              </Box>
            </Box>
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
                {firstPrice}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                style={{
                  background: "#8981FC",
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              />
              <Box sx={{ marginLeft: 2 }}>
                <Typography>2nd Payment</Typography>
                <Typography>Due in 7 Days</Typography>
              </Box>
            </Box>
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
                {secondsPrice}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ marginTop: 2 }} variant="h6">
            Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Typography
              sx={{ marginTop: 2, fontSize: "15px", color: "#5b5d61" }}
            >
              Total Payment
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
              <Typography sx={{ fontSize: "20px" }}>{totalPrice}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Typography
              sx={{ marginTop: 2, fontSize: "15px", color: "#5b5d61" }}
            >
              Interest Paid
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
              <Typography sx={{ fontSize: "20px" }}>2.07</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Typography
              sx={{ marginTop: 2, fontSize: "15px", color: "#5b5d61" }}
            >
              Duration
            </Typography>

            <Typography sx={{ fontSize: "20px" }}>7 Days</Typography>
          </Box>

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
              CONFIRM
            </Button>
          </Box>
          <Typography sx={{ textAlign: "center", fontSize: 10, marginTop: 1 }}>
            Repay {item?.bestOffer} SUI in 7 days
          </Typography>
        </ModalContent>
      </StyledModal>
    </>
  );
};

export default MortgageModal;
