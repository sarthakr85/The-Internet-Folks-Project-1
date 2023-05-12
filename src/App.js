import {
  Box,
  Grid,
  GridItem,
  useBreakpointValue,
  Image,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

const breakpoints = {
  sm: "375px",
  md: "768px",
  lg: "960px",
  xl: "1440px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

function App() {
  const isSmallerThan400 = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });

  return (
    <>
      <Home />
      <AboutUs />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
