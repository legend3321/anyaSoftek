import { Box, Grid, Typography } from "@mui/material";

import background from "../images/background.jpeg";

export default function Clients(props) {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "cover",
        p: 3,
        borderRadius: 5,
        width: 300,
        my: 1,
        mr: 10,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography
            variant="body1"
            color="#07547D"
            sx={{
              fontFamily: "Montserrat",
              textAlign: "left",
              letterSpacing: 2,
            }}
          >
            {props.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component={"img"}
            src={props.logo}
            alt={props.name}
            sx={{ width: 64 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
