"use strict";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #F786EE, #767FFE) !important",
  color: "#fff",
  width: 156,
  height: 46,
  padding: "14px 32px 14px 32px",
  borderRadius: "14px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  visibility: "visible",
  fontSize: "10px",
  transition: "visibility 0.3s ease",
  "&.hidden": {
    visibility: "hidden",
  },
}));

const GradientButton2 = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #767FFE, #F786EE) !important",
  color: "#fff",
  width: 200,
  height: 46,
  padding: "14px 32px 14px 32px",
  borderRadius: "14px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  marginRight: 10,
  visibility: "visible",
  fontSize: "10px",
  transition: "visibility 0.3s ease",
  "&.hidden": {
    visibility: "hidden",
  },
}));

const Header = () => {
  const pathname = usePathname();
  const [connect, setConnect] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <a href="/">
          <img
            src="/image/snotra-logo-dark.png"
            alt="Logo"
            style={{ width: "120px", height: "auto", cursor: "pointer" }}
          />
        </a>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Button
              sx={{
                color: pathname === "/lend" ? "#fe4b4a" : "#fff",
                "&:hover": {
                  borderBottom: "2px solid #fff",
                },
              }}
              href="/lend"
              color="inherit"
            >
              Lend
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="/offers"
              sx={{
                color: pathname === "/offers" ? "#fe4b4a" : "#fff",
                "&:hover": {
                  borderBottom: "2px solid #fff",
                },
              }}
              color="inherit"
            >
              Offers
            </Button>
          </Grid>
          <Grid item>
            <Typography>/</Typography>
          </Grid>
          <Grid item>
            <Button
              href="/borrow"
              sx={{
                color: pathname === "/borrow" ? "#fe4b4a" : "#fff",
                "&:hover": {
                  borderBottom: "2px solid #fff",
                },
              }}
              color="inherit"
            >
              Borrow
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="/loan"
              sx={{
                color: pathname === "/loan" ? "#fe4b4a" : "#fff",
                "&:hover": {
                  borderBottom: "2px solid #fff",
                },
              }}
              color="inherit"
            >
              Loans
            </Button>
          </Grid>
        </Grid>
        <GradientButton2 href="/mortgage">
          NFT Mortgage Marketplace
        </GradientButton2>
        <GradientButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {connect ? "0x1c...234" : "Connect Wallet"}
        </GradientButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              setConnect(!connect);
            }}
          >
            {connect ? "Logout" : "Connect"}
          </MenuItem>
          <Link href="/my-mortgage">
            <MenuItem onClick={handleClose}>My Mortgage</MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

//
export default Header;
