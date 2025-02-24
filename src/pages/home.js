import {
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

import background from "../images/background.jpeg";

import Website from "../images/logos/Website.svg";
import App from "../images/logos/App.svg";
import Design from "../images/logos/Design.svg";
import Cloud from "../images/logos/Cloud.svg";
import GIS from "../images/logos/GIS.svg";
import Software from "../images/logos/Software.svg";
import Marketing from "../images/logos/Marketing.svg";
import Analytics from "../images/logos/Analytics.svg";

const services = [
  { service: "Website Development", logo: Website },
  { service: "App Dev", logo: App },
  { service: "Design", logo: Design },
  { service: "Cloud", logo: Cloud },
  { service: "GIS Soln", logo: GIS },
  { service: "Software Dev.", logo: Software },
  { service: "Digital Marketing", logo: Marketing },
  { service: "Data Analytics", logo: Analytics },
];

function Home(props) {
  var delayCounter = 0;

  const servicesDisplay = services.map((service) => (
    <Box
      key={service.service}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        mx: 5,
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: delayCounter++ * 0.1 }}
      >
        <Box
          component="img"
          src={service.logo}
          sx={{
            background: "linear-gradient(to right bottom, #0886E3, #A3D1EB)",
            borderRadius: "20px",
            p: "11px",
            boxShadow: 3,
            width: "57px",
            height: "57px",
          }}
        />
      </motion.div>
      <Typography
        variant="body1"
        color="initial"
        sx={{ mt: 2, textAlign: "center", fontWeight: 200 }}
      >
        {service.service}
      </Typography>
    </Box>
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        component={"div"}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Toolbar />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h5"
              color="#0871BE"
              sx={{ letterSpacing: 2, mb: 2 }}
            >
              WE ARE ANYA SOFTEK
            </Typography>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Typography
              variant="h2"
              color="initial"
              sx={{
                textAlign: "center",
                fontWeight: "400",
                fontFamily: "Montserrat",
                letterSpacing: 3,
              }}
            >
              BRINGING SOFTWARE IDEAS
              <br />
              TO LIVE
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{
                letterSpacing: 2,
                textAlign: { xs: "justify", sm: "center" },
                width: { xs: "90%", sm: "70%" },
                lineHeight: 2,
                fontFamily: "Hind Madurai",
                mx: "auto",
                mt: 3,
              }}
            >
              A pioneering Indian company with 12 years of expertise in software
              consultancy. Based in Dehradun, Uttarakhand, ASCSPL excels in web
              development, mobile app development, branding, UI/UX, and cloud
              solutions. Experience innovation and excellence with ASCSPL – your
              trusted partner in the digital realm!
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "flex-start",
              justifyContent: "space-around",
              p: 5,
              bgColor: "red",
            }}
          >
            {servicesDisplay}
          </Box>

          <Box sx={{ mt: { xs: 10, md: 0 } }}>
            <TextField
              id="outlined-basic"
              placeholder="email@company.com"
              variant="outlined"
              sx={{ border: "none", outline: "none", borderRadius: 0 }}
            />
            <Button
              variant="contained"
              sx={{
                height: "100%",
                background:
                  "linear-gradient(to right bottom, #0886E3, #A3D1EB)",
                borderRadius: " 0",
              }}
              endIcon={<ArrowOutwardIcon />}
            >
              <Typography variant="body1">Let's Talk</Typography>
            </Button>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}

export default Home;
