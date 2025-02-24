import { Box, Typography, Container, Grid } from "@mui/material";

import mission from "../images/mission.png";

function Mission() {
  return (
    <Box sx={{ bgcolor: "rgba(66, 173, 251, 0.20)", p: 5, width: "100%" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "left",
                mb: 3,
                color: "#636363",
                fontWeight: 100,
                letterSpacing: 4,
              }}
            >
              ABOUT US
            </Typography>
            <Typography variant="h3" sx={{ letterSpacing: 2 }}>
              OUR MISSION
            </Typography>
            <Typography
              variant="body1"
              sx={{
                letterSpacing: 2,
                lineHeight: 2,
                mt: 5,
                textAlign: "justify",
              }}
            >
              To make software development simple and accessible.
              <br />
              With a collective experience of around 13 years in the industry,
              we embark on every project with a commitment to excellence that
              goes beyond just coding and design it's about crafting digital
              experiences that leave a lasting impression.
              <br />
              We understand that every project is a unique opportunity to create
              something extraordinary. From concept to execution, we are
              committed to delivering solutions that not only meet but exceed
              your expectations.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src={mission}
              alt="mission"
              sx={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Mission;
