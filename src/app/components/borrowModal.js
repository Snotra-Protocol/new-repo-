import React, { useEffect, useState } from "react";
import { Button, Modal, Box, Typography, Checkbox } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { withStyles } from "@mui/styles";

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

const BorrowModal = ({ item, handleModal, open }) => {
  const [items, setItems] = useState([]);

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
    const basketItems =
      JSON.parse(localStorage.getItem("basketItemsBorrow")) || [];
    const _basketItems = basketItems.name ? basketItems : [];
    _basketItems.push(items[0]);
    window.localStorage.setItem(
      "basketItemsBorrow",
      JSON.stringify(_basketItems)
    );
  };

  if (!item) return null;
  const buttonHoverStyle = {
    background: "linear-gradient(45deg, #F786EE, #767FFE) !important",
    width: "50%",
    padding: 2,
  };

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
                src={item?.logo}
                style={{
                  height: "64px",
                  width: "64px",
                  borderRadius: "64px",
                }}
              />

              <Typography sx={{ marginLeft: 2 }} variant="h6">
                {item?.name}
              </Typography>
            </Box>
            <Box
              sx={{
                width: 110,
                height: 60,
                borderWidth: 0.5,
                borderColor: "#fff",
                borderRadius: 2,
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ marginLeft: 1, marginTop: "3px", fontWeight: "bold" }}
              >
                Floor
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 1,
                  fontWeight: "bold",
                }}
                variant="h8"
              >
                <img
                  src="/image/sui.png"
                  style={{ width: "15px", height: "10px" }}
                />{" "}
                {item?.floor}
              </Typography>
            </Box>
            <CloseIcon />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                INTEREST
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "green",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                {" "}
                <img
                  src="/image/sui-green.png"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "5px",
                  }}
                />
                {item.apy}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                DURATION
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {item.duration}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                AVAILABLE TO BARROW
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontWeight: "bold",
                }}
              >
                {" "}
                <img
                  src="/image/sui.png"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "5px",
                  }}
                />
                {item.bestOffer}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MyCheckbox />
            <Typography>Select All</Typography>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              marginTop: 5,
            }}
          >
            <Box
              sx={{
                width: 220,
                height: 320,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img src={item.logo} style={{ width: 200, height: 300 }} />
            </Box>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              marginTop: 2,
            }}
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              1 NFT Selected
            </Typography>
          </Box>

          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              <img
                src="/image/sui.png"
                style={{ width: "40px", height: "30px" }}
              />
              {item.bestOffer}
            </Typography>
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
              Place Offer
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

export default BorrowModal;
