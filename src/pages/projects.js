import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import Project from "../components/project";
import ReactSimplyCarousel from "react-simply-carousel";

import publicWorks from "../images/publicWorks.png";
import minorIrrigation from "../images/minorIrrigation.png";
import peyJal from "../images/peyJal.png";
import govUtt from "../images/govUtt.png";
import iie from "../images/iie.png";
import rajyaKrishi from "../images/rajyaKrishi.png";
import agr from "../images/agr.png";
import uttagr from "../images/uttagr.png";
import ubte from "../images/ubte.png";
import Clients from "../components/clients";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const projects = [
  {
    id: 1,
    title: "eKrishi Mandi Management System",
    description:
      " Our eMandi Solution is a comprehensive  platform designed for agricultural  markets. It digitizes the process of buying  and selling agricultural produce, providing a transparent and efficient solutions for Agriculture Mandi for  generating  entry/exit  gate  pass,  generating 6R, 9R receipts, maintaining  Online Stock register .",
  },
  {
    id: 2,
    title: "Single Login System",
    description:
      "Single Login System is based on single  window decision support system. This  solution enhances user convenience  and streamline various management features like Automation of Time Table Generation,  Efficiently managing Staff & Students  Information",
  },
  {
    id: 3,
    title: "Online Examination System Solution",
    description:
      "Our Online Examination System  Software simplifies the process of  conducting exams and assessments. It provides a secure and user-friendly  platform for creating, administering,  and grading online exams. This  software supports various question  types, customizable exam settings, robust result analysis",
  },
  {
    id: 4,
    title: "GIS Solutions",
    description:
      "Anya Softek offers cutting-edge  Geographic Information System (GIS)  solutions. Our GIS solutions help  organizations visualize, analyze, and  interpret spatial data to make informed  decisions. We have developed customized  GIS applications  like Road Safety App,  Survey App, 3D Modeller, Planning  Calculator",
  },
  {
    id: 5,
    title: "Forest Proposal Management System",
    description:
      "A comprehensive software solution  for managing forest-related  proposals and projects. This  system facilitates the submission,  review, and approval process for  forestry projects, ensuring efficient  project management and  compliance with regulatory  requirements",
  },
];

const clients = [
  { name: "Public Works Department", logo: publicWorks },
  { name: "Minor Irrigation Dept. Uttarakhand", logo: minorIrrigation },
  { name: "Pey Jal Neeyam Uttarakhand", logo: peyJal },
  { name: "Government of Uttarakhand", logo: govUtt },
  { name: "Indian Institute of Entrepreneurship", logo: iie },
  { name: "Rajya Krishi Utpadan Mandi Parishad", logo: rajyaKrishi },
  { name: "Uttarakhand Agr. Produce Marketing", logo: uttagr },
  { name: "Jharkhand State Agr. Marketing Board", logo: agr },
  { name: "Uttarakhand Board of Technical Education", logo: ubte },
];

export default function Projects() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const projectDisplay = projects.map((project) => (
    <Project
      key={project.id}
      id={project.id}
      title={project.title}
      description={project.description}
    />
  ));
  const clientDisplay = clients.map((client) => (
    <Clients key={client.name} name={client.name} logo={client.logo} />
  ));
  return (
    <Box sx={{ my: 20 }}>
      <Container>
        <Typography
          variant="h6"
          color="#636363"
          sx={{
            fontFamily: "Montserrat",
            textAlign: "center",
            mt: 5,
            letterSpacing: 2,
          }}
        >
          PAST TRIUMPHS, FUTURE INNOVATIONS
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            textAlign: "center",
            letterSpacing: 4,
          }}
        >
          OUT STORIED JOURNEY AT ANYA SOFTEK
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: { sm: "justify", md: "center" },
            mt: 5,
            width: { sm: "90%", md: "60%" },
            mx: "auto",
            letterSpacing: 2,
            fontFamily: "Hind Madurai",
          }}
        >
          Step into the legacy of success with ASCPL as we proudly showcase our
          past projects. Each venture is a testament to our commitment to
          excellence and innovation. From groundbreaking web and mobile app
          development to creating unforgettable brand identities.
        </Typography>
      </Container>
      {projectDisplay}
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ fontFamily: "Montserrat", mt: 10, letterSpacing: 2 }}
        >
          OUR ESTEEMED CLIENTS
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Hind Madurai",
            mt: 3,
            width: { xs: "90%", md: "60%" },
            textAlign: { xs: "justify", md: "left" },
          }}
        >
          We take pride in collaborating with visionary organizations across
          industries, transforming challenges into opportunities. Join our
          distinguished clientele and experience the impact of innovative
          solutions tailored to elevate your business in the digital landscape.
        </Typography>
        <ReactSimplyCarousel
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "space-between",
              userSelect: "none",
            },
          }}
          preventScrollOnSwipe
          swipeTreshold={60}
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          forwardBtnProps={{
            children: <ArrowRightIcon />,
            style: {
              border: "none",
              background: "transparent",
              color: "#333",
              cursor: "pointer",
              width: 60,
              height: "100%",
              minWidth: 60,
              alignSelf: "center",
              fontSize: 40,
              margin: "auto",
            },
          }}
          itemsToShow={4}
          itemsToScroll={3}
          backwardBtnProps={{
            children: <ArrowLeftIcon />,
            style: {
              border: "none",
              background: "transparent",
              color: "#333",
              cursor: "pointer",
              width: 60,
              height: "100%",
              minWidth: 60,
              alignSelf: "center",
              fontSize: 40,
              margin: "auto",
            },
          }}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                background: "grey",
                margin: 4,
                transition: "all 0.3s",
              },
            },
            activeItemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                background: "black",
                marginLeft: 4,
                marginRight: 4,
                transition: "all 0.3s",
              },
            },
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              maxWidth: 600,
              speed: 400,
              forwardBtnProps: {
                style: {
                  display: "none",
                },
              },
              backwardBtnProps: {
                style: {
                  display: "none",
                },
              },
              containerProps: {
                style: {
                  justifyContent: "center",
                },
              },
            },
          ]}
          speed={800}
          easing="ease-out"
          centerMode
        >
          {clientDisplay}
        </ReactSimplyCarousel>
      </Container>
    </Box>
  );
}
