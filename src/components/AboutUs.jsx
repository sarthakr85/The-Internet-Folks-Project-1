import {
  Box,
  useBreakpointValue,
  Image,
  Flex,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import AboutUsImage from "../assets/jpg/aboutUsPhoto.jpg";

function AboutUs() {
  return (
    <Flex
      flexDirection="row"
      w={{ base: "100%" }}
      h="29.19rem"
      className="aboutUsContainer"
      mt={{ md: "7rem", lg: "9.5rem", xl: "11.625rem" }}
    >
      <Image
        ml={{ md: "4.81rem", lg: "8.81rem", xl: "12.81rem" }}
        src={AboutUsImage}
      />
      <Box
        ml={{ md: "4.81rem", lg: "8.81rem", xl: "12.81rem" }}
        mr={{ md: "3rem", lg: "5rem", xl: "9rem" }}
        alignSelf="center"
      >
        <Heading
          fontFamily="Poppins"
          fontWeight="600"
          fontSize="45px"
          color="#0e2368"
        >
          About Us
        </Heading>
        <Text
          fontFamily="Opens Sans"
          fontWeight="400"
          fontSize="15px"
          lineHeight="27px"
          color="#444957"
          mt="1.7rem"
          className="aboutUsText"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </Text>
        <Button
          p="1.4rem"
          mt="1.7rem"
          fontFamily="Source Sans Pro"
          fontWeight="600"
          fontSize="16px"
          lineHeight="36px"
          letterSpacing="0.03em"
          color="#ffffff"
          colorScheme="red"
          borderRadius="21px"
          className="aboutUsBtn"
        >
          Read More
        </Button>
      </Box>
    </Flex>
  );
}
export default AboutUs;
