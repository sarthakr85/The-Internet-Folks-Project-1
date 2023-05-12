import {
  Box,
  Grid,
  useBreakpointValue,
  Image,
  Flex,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import Logo from "../assets/jpg/logo.jpg";
import LandingPagePhoto from "../assets/jpg/landingPagePhoto.jpg";

function Home() {
  return (
    <Grid w={{ base: "100%" }} h="50.25rem" templateColumns="repeat(2, 1fr)">
      {/* {isSmallerThan400 ? (
          <>
            <GridItem rowSpan={5} colSpan={2} bg="#000" />
            <GridItem rowSpan={3} colSpan={2} bg="#020" />
          </>
        ) : ( */}
      <>
        <Box rowSpan={1} colSpan={1}>
          <Flex flexDirection="column">
            <Box>
              <Image
                src={Logo}
                mt="2.0625rem"
                ml={{ md: "2.25rem", lg: "4.25rem", xl: "6.25rem" }}
              />
            </Box>
            <Box
              mt={{ md: "2.25rem", lg: "4.25rem", xl: "6.25rem" }}
              ml={{ md: "2.25rem", lg: "4.25rem", xl: "6.25rem" }}
              mr={{ md: "2rem", lg: "4rem", xl: "11rem" }}
            >
              <Heading
                fontFamily="Source Sans Pro"
                fontSize="3.875em"
                fontWeight="700"
                color="#0e2368"
              >
                Discover the <span style={{ color: "#E23744" }}>Best</span> Food
                and Drinks
              </Heading>
              <Text
                fontFamily="Open sans"
                fontWeight="400"
                fontSize="16.4447px"
                color="#444957"
                lineHeight="27.41px"
                mt="1.625rem"
              >
                Naturally made Healthcare Products for the better care & support
                of your body.
              </Text>
              <Button
                fontFamily="Open Sans"
                colorScheme="red"
                borderRadius="34px"
                fontWeight="700"
                fontSize="18px"
                letterSpacing="0.01em"
                lineHeight="36px"
                color="#ffffff"
                p="1.7rem"
                mt={{ md: "1rem", lg: "1.7rem", xl: "2.5625rem" }}
              >
                Explore Now!
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box rowSpan={1} colSpan={1}>
          <Box bg="#E23744">
            <Image src={LandingPagePhoto} />
          </Box>
        </Box>
      </>
      {/* )} */}
    </Grid>
  );
}
export default Home;
