import Navbar from "./components/navbar";
import Home from "./pages/home";
import Mission from "./pages/mission";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Reviews from "./pages/reviews";
import { Box } from "@mui/material";
import Footer from "./pages/footer";

function App() {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <Home />
      <Mission />
      <Services />
      <Projects />
      <Reviews />
      <Footer />
    </Box>
  );
}

export default App;
