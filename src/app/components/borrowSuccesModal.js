import React, { useState } from "react";
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
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
  borderColor: "#767FFE",
  borderWidth: 1,
  width: "100%",
  height: "45%",
  color: "#F786EE",
  "&:hover": {
    background: "#767FFE",
    color: "#fff",
  },
}));

const BorrowSuccessModal = ({ item, handleModal, open }) => {
  if (!item) return null;

  const buttonHoverStyle = {
    background: "linear-gradient(45deg, #F786EE, #767FFE) !important",
    width: "100%",
    height: "45%",
  };
  const buttonHoverBorderStyle = {
    border: "2px solid linear-gradient(45deg, #F786EE, #767FFE)",
    backgroundImage: "linear-gradient(45deg, #F786EE, #767FFE)",
    backgroundClip: "padding-box",
    width: "100%",
    height: "45%",
  };
  return (
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
          height: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          background: "#000",
          borderRadius: "8px",
          p: 3,
        }}
      >
        <Box sx={{ display: "flex", width: "90%", alignItems: "center" }}>
          <CheckCircleIcon style={{ color: "#fff", fontSize: 70 }} />
          <Typography sx={{ fontWeight: "bold", fontSize: 18, marginLeft: 4 }}>
            You have successfully borrowed
            <img
              src="/image/sui.png"
              alt="NFT"
              style={{
                display: "inline-block",
                width: "15px",
                height: "12px",
                verticalAlign: "middle",
                marginLeft: 5,
              }}
            />
            500 for 1 NFT.
          </Typography>
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
                fontSize: "10px",
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
                fontSize: "10px",
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
                fontSize: "10px",
              }}
            >
              REPAYMENT
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
            marginTop: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={item?.logo}
            style={{
              height: "120px",
              width: "120px",
            }}
          />
          <Stack
            sx={{
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              marginLeft: 7,
            }}
          >
            <CustomButton onClick={handleModal} variant="outlined">
              Add to Calendar
            </CustomButton>
            <Button
              onClick={handleModal}
              sx={{ ...buttonHoverStyle, marginTop: 1 }}
              variant="contained"
            >
              Notify Me
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};

export default BorrowSuccessModal;
