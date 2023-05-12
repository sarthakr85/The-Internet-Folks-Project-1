import { Box, Heading, Text, Flex, Image, Grid } from "@chakra-ui/react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import logoFooter from "../assets/jpg/logoFooter.png";

function Footer() {
  return (
    <Grid mt="4.06rem" bg="#F8F8F8" h="22.65rem" templateColumns="2fr 4fr">
      <Image
        mt="7.67rem"
        ml={{ md: "2.25rem", lg: "4.25rem", xl: "6.25rem" }}
        w="10.06rem"
        h="7.81rem"
        src={logoFooter}
      />
      <Flex
        mt="5.25rem"
        mr={{ md: "2.75rem", lg: "4.75rem", xl: "6.75rem" }}
        gap="9rem"
        flexDirection="row"
      >
        <Flex flexBasis="2" alignSelf="" gap="15px" flexDirection="column">
          <Heading
            fontFamily="Source Sans Pro"
            fontStyle="normal"
            fontWeight="600"
            fontSize="18.8433px"
            lineHeight="27px"
            letterSpacing="0.03em"
            color="#0E2368"
          >
            Contact Us
          </Heading>
          <Text className="footerText">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </Text>
          <Text className="footerText">example2020@gmail.com</Text>
          <Text className="footerText">(904) 443-0343</Text>
        </Flex>

        <Flex flexBasis="2" flexGrow="1" gap="0.875rem" flexDirection="column">
          <Text
            fontFamily="Source Sans Pro"
            fontStyle="normal"
            fontWeight="600"
            fontSize="18.8433px"
            lineHeight="27px"
            letterSpacing="0.03em"
            color="#0E2368"
          >
            More
          </Text>
          <Text className="footerText">About Us</Text>
          <Text className="footerText">Proucts</Text>
          <Text className="footerText">Career</Text>
          <Text className="footerText">Contact Us</Text>
        </Flex>
        <Box>
          <Heading
            fontFamily="Source Sans Pro"
            fontStyle="normal"
            fontWeight="600"
            fontSize="18.8433px"
            lineHeight="27px"
            letterSpacing="0.03em"
            color="#0E2368"
          >
            Social Links
          </Heading>
          <Flex mt="0.875rem" gap="2.25rem" flexDirection="row">
            <FaInstagram style={{ color: "#0E2368" }} />
            <FaTwitter style={{ color: "#0E2368" }} />
            <FaFacebookF style={{ color: "#0E2368" }} />
          </Flex>
          <Text mt="102px" className="footerText">
            © 2022 Food Truck Example
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
}
export default Footer;
