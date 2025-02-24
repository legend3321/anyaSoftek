import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

import review from "../images/reviews.png";
import { motion } from "framer-motion";

export default function Review(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
      <Card
        sx={{
          maxWidth: { md: 400, xs: "90%", sm: "70%" },
          p: 5,
          m: 2,
          borderRadius: 5,
          boxShadow: 10,
          bgcolor: "#EBF7FF",
        }}
      >
        <CardMedia
          image={review}
          sx={{ height: "63px", width: "75px", m: "auto", mb: 5 }}
        />
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              letterSpacing: 2,
            }}
          >
            {props.review}
          </Typography>
          <Divider sx={{ my: 5 }} />
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Avatar
              alt={props.name}
              src={props.profile}
              sx={{ m: "auto", flex: 1 }}
            />
            <Box sx={{ flex: 4 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat",
                  fontStyle: "bold",
                  textAlign: "center",
                }}
              >
                {props.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Montserrat", textAlign: "center" }}
              >
                {props.designation}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
