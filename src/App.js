import { useBreakpointValue } from "@chakra-ui/react";
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
    sm: false,
    md: false,
    lg: false,
  });

  return (
    <>
      <Home isSmallerThan400={isSmallerThan400} />
      <AboutUs isSmallerThan400={isSmallerThan400} />
      <Articles isSmallerThan400={isSmallerThan400} />
      <Footer isSmallerThan400={isSmallerThan400} />
    </>
  );
}

export default App;
