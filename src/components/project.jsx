import { Box, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Project(props) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        p: 5,
        display: "flex",
        flexDirection: props.id % 2 === 0 ? "row" : "row-reverse",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: props.id % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h1"
          color="rgba(8, 113, 190, 0.80)"
          sx={{
            display: { xs: "none", md: "block" },
            fontFamily: "Montserrat",
            textAlign: "center",
            letterSpacing: 2,
            flex: 1,
            fontSize: 481,
          }}
        >
          {props.id}
        </Typography>
      </motion.div>

      <Box sx={{ flex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h5"
            color="rgba(8, 113, 190, 0.80)"
            sx={{
              fontFamily: "Montserrat",
              textAlign: {
                xs: "center",
                md: props.id % 2 === 0 ? "left" : "right",
              },
              letterSpacing: 2,
              flex: 1,
            }}
          >
            {props.title}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Hind Madurai",
              textAlign: {
                xs: "justify",
                md: props.id % 2 === 0 ? "left" : "right",
              },
              width: { xs: "100%", md: "80%" },
              ml: { xs: 0, md: props.id % 2 === 0 ? 0 : "auto" },
              letterSpacing: 2,
              flex: 1,
              mt: 3,
            }}
          >
            {props.description}
          </Typography>
        </motion.div>
      </Box>
      <Divider sx={{ display: { xs: "block", md: "none" } }} />
    </Container>
  );
}
