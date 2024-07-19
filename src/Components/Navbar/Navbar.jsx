import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { Tooltip } from "@mui/material";
import logo from "../../Images/logo.png";

function Navbar() {
  const [navbar, setNavbar] = React.useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <AppBar className={navbar ? "navbar active" : "navbar"} position="static">
      <Container maxWidth="xl">
        <Toolbar className="navbar-box" disableGutters>
          <img className="logo" alt="" src={logo}></img>
          <Button className="connect-btn" variant="contained">
            Connect Now
          </Button>

          <Box className="navbar-resp" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Tooltip>
                <PermPhoneMsgRoundedIcon className="contact-icon" />
              </Tooltip>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
