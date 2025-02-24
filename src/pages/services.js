import { Box, Container, Typography, Grid } from "@mui/material";

import service1 from "../images/service1.jpeg";
import service2 from "../images/service2.jpeg";
import webDevServices from "../images/logos/webDevServices.svg";
import mobileAppDevServices from "../images/logos/mobileAppDevServices.svg";
import uiuxServices from "../images/logos/uiuxServices.svg";
import cloudServices from "../images/logos/cloudServices.svg";
import GisServices from "../images/logos/GisServices.svg";
import softwareServices from "../images/logos/softwareServices.svg";
import marketingServices from "../images/logos/marketingServices.svg";
import analyticsServices from "../images/logos/cloudServices.svg";

export default function Services() {
  return (
    <Box sx={{ p: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "left",
                color: "#636363",
                fontWeight: 100,
                letterSpacing: 6,
              }}
            >
              SERVICE
            </Typography>
            <Typography variant="h3" sx={{ letterSpacing: 2 }}>
              WHAT WE DO
            </Typography>
            <Typography
              variant="body1"
              sx={{
                letterSpacing: 2,
                lineHeight: 2,
                mt: 2,
                width: { xs: "100%", md: 3 / 4 },
                textAlign: { xs: "justify", md: "left" },
              }}
            >
              At ASCSPL, we propel businesses towards success with our strategic
              expertise, cutting-edge solutions, offered services and an
              unwavering commitment to excellence.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid item xs={12} md={6}>
                <img
                  src={webDevServices}
                  alt="webDevServices"
                  style={{ width: "74px", height: "74px" }}
                />
                <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                  Web Development
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    lineHeight: 2,
                    mt: 2,
                    width: { xs: "100%", md: 3 / 4 },
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  Crafting compelling digital experiences through bespoke web
                  solutions tailored to your brand's vision and objectives
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: { xs: 5, md: 0 } }}>
                <img
                  src={mobileAppDevServices}
                  alt="webDevServices"
                  style={{ width: "74px", height: "74px" }}
                />
                <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                  Mobile App Dev
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    lineHeight: 2,
                    mt: 2,
                    width: { xs: "100%", md: 3 / 4 },
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  Innovative mobile applications that bring your ideas to life,
                  enhancing user engagement and market presence.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: { xs: 5, md: 0 } }}>
                <img
                  src={uiuxServices}
                  alt="webDevServices"
                  style={{ width: "74px", height: "74px" }}
                />
                <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                  UI / UX
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    lineHeight: 2,
                    mt: 2,
                    width: { xs: "100%", md: 3 / 4 },
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  Elevating user interactions through intuitive and visually
                  striking design, ensuring a memorable and user-centric digital
                  experience.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: { xs: 5, md: 0 } }}>
                <img
                  src={cloudServices}
                  alt="webDevServices"
                  style={{ width: "74px", height: "74px" }}
                />
                <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                  Cloud Computing
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    lineHeight: 2,
                    mt: 2,
                    width: { xs: "100%", md: 3 / 4 },
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  Seamless and scalable cloud architectures, empowering your
                  business with flexibility, security, and optimal performance.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                alignItems: "center",
              },
            }}
          >
            <img
              src={service1}
              alt="service1"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: { xs: 0, sm: 0, md: 1 } }}>
          <Grid
            item
            xs={0}
            md={4}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                alignItems: "center",
              },
            }}
          >
            <img
              src={service2}
              alt="service2"
              style={{ width: "80%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid item xs={12} md={6}>
                <img
                  src={GisServices}
                  alt="GisServices"
                  style={{ width: "74px", height: "74px" }}
                />
                <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                  GIS Solutions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    lineHeight: 2,
                    mt: 2,
                    width: { xs: "100%", md: 3 / 4 },
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  Elevating user interactions through intuitive and visually
                  striking design, ensuring a memorable and user-centric digital
                  experience.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: { xs: 5, md: 0 } }}>
                <img
                  src={softwareServices}
                  alt="softwareServices"
                  style={{ width: "74px", height: "74px" }}
                />
                <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                  Software Services
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    lineHeight: 2,
                    mt: 2,
                    width: { xs: "100%", md: 3 / 4 },
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  Seamless and scalable cloud architectures, empowering your
                  business with flexibility, security, and optimal performance.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: { xs: 5, md: 0 } }}>
                <img
                  src={marketingServices}
                  alt="marketingServices"
                  style={{ width: "74px", height: "74px" }}
                />
                <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                  Digital Marketing
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    lineHeight: 2,
                    mt: 2,
                    width: { xs: "100%", md: 3 / 4 },
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  Elevating user interactions through intuitive and visually
                  striking design, ensuring a memorable and user-centric digital
                  experience.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mt: { xs: 5, md: 0 } }}>
                <img
                  src={analyticsServices}
                  alt="analyticsServices"
                  style={{ width: "74px", height: "74px" }}
                />
                <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                  Data Analytics
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    lineHeight: 2,
                    mt: 2,
                    width: { xs: "100%", md: 3 / 4 },
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  Seamless and scalable cloud architectures, empowering your
                  business with flexibility, security, and optimal performance.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
