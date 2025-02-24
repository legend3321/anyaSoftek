import {
  Box,
  Grid,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

import logo from "../images/logo.png";
import background from "../images/background.jpeg";
import footerMail from "../images/logos/footerMail.svg";
import linkedinFooter from "../images/linkedinFooter.png";
import xFooter from "../images/xFooter.png";
import navbar from "../images/logos/navbar.svg";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 5,
        mt: { xs: 0, md: 50 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: { xs: "static", md: "absolute" },
          top: -120,
          right: 0,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: { xs: 10, md: 0 },
          borderBottomRightRadius: { xs: 10, md: 0 },
          boxShadow: 3,
          width: { xs: "100%", md: "60%" },
          p: 5,
          bgcolor: " #078BED",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h6"
              color="white"
              sx={{ fontFamily: "Montserrat" }}
            >
              WE ARE HERE FOR YOU{" "}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                textShadow: 10,
              }}
            >
              Let's work together
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "Hind Madurai" }}
            >
              Fuelled with inspiration and armed with strategic insights, let's
              embark on the journey of progress together. It's time to roll up
              our sleeves
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", justifyContent: "center" }}
          ></Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{ mt: { xs: 5, md: 0 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              mb: 5,
            }}
          >
            <Box
              component="img"
              src={logo}
              sx={{
                width: "167px",
                height: "auto",
              }}
            />
            <Box component="img" src={navbar} sx={{ width: 167, mx: "auto" }} />
          </Box>
          <Typography variant="body1" sx={{ fontFamily: "Hind Madurai" }}>
            Our consultancy expertise empowers organizations to thrive in a
            dynamic market, driving success through tailored strategies and
            transformative approaches
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginTop: 2,
              mt: { xs: 5, md: 10 },
              bgcolor: "white",
            }}
          >
            <TextField
              id="mail"
              variant="filled"
              label="Mail"
              sx={{ bgcolor: "white", flex: 4 }}
              placeholder="Enter your mail"
            />
            <Box
              component="img"
              src={footerMail}
              sx={{ flex: 1, width: 57, height: 57 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={1} sx={{ mt: { xs: 0, md: 10 } }}></Grid>
        <Grid item xs={12} md={2} sx={{ mt: { xs: 5, md: 10 } }}>
          <Typography variant="h6" sx={{ fontFamily: "Hind Madurai" }}>
            Socials
          </Typography>
          <Box
            component="img"
            src={linkedinFooter}
            sx={{
              background: "linear-gradient(to right bottom, #0886E3, #A3D1EB)",
              borderRadius: "20px",
              p: "11px",
              boxShadow: 3,
              width: "57px",
              height: "57px",
              mt: 5,
              mr: 5,
            }}
          />
          <Box
            component="img"
            src={xFooter}
            sx={{
              background: "linear-gradient(to right bottom, #0886E3, #A3D1EB)",
              borderRadius: "20px",
              p: "11px",
              boxShadow: 3,
              width: "57px",
              height: "57px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={3} sx={{ mt: { xs: 5, md: 10 } }}>
          <Typography variant="h6" sx={{ fontFamily: "Hind Madurai" }}>
            Services
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Hind Madurai", mt: 3, lineHeight: 3 }}
          >
            <Grid container>
              <Grid item xs={6}>
                <List sx={{ p: 0 }}>
                  <ListItem disablePadding>Website</ListItem>
                  <ListItem disablePadding>App Dev</ListItem>
                  <ListItem disablePadding>UI/UX</ListItem>
                  <ListItem disablePadding>Cloud</ListItem>
                </List>
              </Grid>
              <Grid item xs={6}>
                <List>
                  <ListItem disablePadding>GIS Soln</ListItem>
                  <ListItem disablePadding>Software Dev.</ListItem>
                  <ListItem disablePadding>Digital Marketing</ListItem>
                  <ListItem disablePadding>Data Analytics</ListItem>
                </List>
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ mt: { xs: 5, md: 10 } }}>
          <Typography variant="h6" sx={{ fontFamily: "Hind Madurai" }}>
            Stay Connected
          </Typography>
          <List sx={{ fontFamily: "Hind Madurai", mt: 3, lineHeight: 3 }}>
            <ListItem>
              <ListItemIcon>
                <NearMeIcon />
              </ListItemIcon>
              <ListItemText>
                151/16-B, Doon Vihar, Rajpur Road, Jakhan Dehradun - 248001 (UK)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText>+91 745480255</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText>info@anyasoftek.in</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography
        variant="body1"
        sx={{ mt: 5, fontFamily: "Hind Madurai", textAlign: "right" }}
      >
        Terms and Conditions | Privacy Policy | © 2021 Anya Softek. All Rights
      </Typography>
    </Box>
  );
}

export default Footer;
