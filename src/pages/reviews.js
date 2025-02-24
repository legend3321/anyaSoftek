import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Review from "../components/review";
import ReviewProfie from "../images/reviewProfile.jpeg";

const reviews = [
  {
    id: 1,
    name: "Shweta Bajaj",
    designation: "Content Creator",
    review:
      "Anya Softek's cloud solutions transformed our business operations. The seamless integration and robust infrastructure have streamlined processes.",
    profile: ReviewProfie,
  },
  {
    id: 2,
    name: "Sawan Kapoor",
    designation: "Web Design",
    review:
      "Anya Softek's expertise in web development is unparalleled. Their team delivered a sleek and functional website that truly captured our brand essence. Exceptional service and attention to detail",
    profile: ReviewProfie,
  },
  {
    id: 3,
    name: "Kiran Joshi",
    designation: "Web Design",
    review:
      "The mobile app developed by Anya Softek exceeded our expectations. The innovative solutions and user-friendly design have significantly enhanced our customer engagement. ",
    profile: ReviewProfie,
  },
];

export default function Reviews() {
  const reviewDisplay = reviews.map((review) => (
    <Review
      key={review.id}
      name={review.name}
      review={review.review}
      profile={review.profile}
      designation={review.designation}
    />
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          bgcolor: "#078BED",
          py: 10,
          position: "relative",
          mb: { xs: 10, md: 20 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "209px",
            height: "209px",
            borderRadius: "50%",
            top: -100,
            left: -50,
            backgroundColor: "#EBF7FF",
            boxShadow: 10,
            display: { xs: "none", md: "block" },
          }}
        />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "white",
            fontFamily: "Montserrat",
            letterSpacing: 2,
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "white",
            fontFamily: "Montserrat",
            letterSpacing: 2,
          }}
        >
          What People Say
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "white",
            fontFamily: "Montserrat",
            letterSpacing: 2,
            mt: 5,
            mb: { xs: 10, md: 50 },
          }}
        >
          Explore the voices of satisfaction. Our clients speak through 5
          million
          <br />
          reviews, sharing stories of success and partnership.
        </Typography>
        <Box
          sx={{
            position: { xs: "static", sm: "static", md: "absolute" },
            display: { xs: "block", md: "flex" },
            flexDirection: { sm: "column", xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "flex-start", md: "flex-end" },
            bottom: "-100px",
            left: { xs: "", md: "50%" },
            transform: { xs: "", md: "translateX(-50%)" },
            width: "90%",
            mx: "auto",
          }}
        >
          {reviewDisplay}
        </Box>
      </Box>
    </motion.div>
  );
}
