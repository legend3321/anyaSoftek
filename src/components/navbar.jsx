import { useState } from "react";
import {
  AppBar,
  Slide,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  useScrollTrigger,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.png";

import navbar from "../images/logos/navbar.svg";

const drawerWidth = 240;
const navItems = ["Home", "Mission", "Services", "Contact", "Reviews"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleClick() {}

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const scrollTrigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", fontSize: "24px", letterSpacing: 2 }}
              onClick={handleClick}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Slide appear={true} direction="down" in={!scrollTrigger}>
        <AppBar
          position="fixed"
          component="nav"
          elevation={trigger ? 10 : 0}
          sx={{
            backdropFilter: trigger ? "blur(10px)" : "blur(0px)",
            bgcolor: trigger ? "rgba(155,155,155,0.2)" : "transparent",
          }}
        >
          <Toolbar sx={{ width: "80%", mx: "auto" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              src={logo}
              sx={{
                mx: { xs: "auto", md: 1 },
                height: "80px",
                ml: 3,
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-between",
                width: "50%",
                mx: "auto",
              }}
            >
              {navItems.map((item) => (
                <Button onClick={handleClick} key={item} sx={{ color: "#333" }}>
                  <Typography variant="body1" sx={{ fontFamily: "Montserrat" }}>
                    {item}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" }, mr: 5 }}>
              <Box component="img" src={navbar} sx={{ height: "50px" }} />
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
