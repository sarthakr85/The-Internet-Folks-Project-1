import { Heading, Text, Flex, Image, Button } from "@chakra-ui/react";

function ArticleCard({ headingName, image, isSmallerThan400 }) {
  return (
    <>
      {isSmallerThan400 ? (
        <>
          <Flex
            textAlign="center"
            p="1.6875rem"
            w="16.9rem"
            h="30.25rem"
            border="1.37039px solid rgba(147, 162, 211, 0.38)"
            borderRadius="20.937px"
            flexDirection="column"
          >
            <Image borderRadius="27px" w="12.75rem" h="10.375rem" src={image} />
            <Heading
              mt="2.22rem"
              fontFamily="Poppins"
              fontWeight="700"
              fontSize="16px"
              lineHeight="35px"
              color="#0E2368"
              className="articleCardHeading"
              as="h1"
            >
              {headingName}
            </Heading>
            <Text className="articleCardText" mt="0.875rem">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </Text>
            <Button
              alignSelf="center"
              fontFamily="Source Sans Pro"
              border="1px solid rgba(147, 162, 211, 0.38)"
              borderRadius="21px"
              mt="2.09rem"
              w="131px"
              bg="#FFFFFF"
              className="articleCardBtn"
            >
              Read More
            </Button>
          </Flex>
        </>
      ) : (
        <Flex
          p="1.6875rem"
          w="23.8125rem"
          h="34.625rem"
          border="1.37039px solid rgba(147, 162, 211, 0.38)"
          borderRadius="20.937px"
          flexDirection="column"
        >
          <Image borderRadius="21px" w="20.375rem" h="16.0625rem" src={image} />
          <Heading
            mt="2.22rem"
            fontFamily="Poppins"
            fontWeight="700"
            fontSize="21px"
            lineHeight="27px"
            color="#0E2368"
            className="articleCardHeading"
            as="h1"
          >
            {headingName}
          </Heading>
          <Text className="articleCardText" mt="0.875rem">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </Text>
          <Button
            fontFamily="Source Sans Pro"
            border="1px solid rgba(147, 162, 211, 0.38)"
            borderRadius="21px"
            mt="2.09rem"
            w="131px"
            bg="#FFFFFF"
            className="articleCardBtn"
          >
            Read More
          </Button>
        </Flex>
      )}
    </>
  );
}
export default ArticleCard;
