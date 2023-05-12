import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ArticleCard from "./ArticleCard";
import ArticleImage1 from "../assets/jpg/articlePhoto1.jpg";
import ArticleImage2 from "../assets/jpg/articlePhoto2.jpg";
import ArticleImage3 from "../assets/jpg/articlePhoto3.jpg";
import ArticleImage4 from "../assets/jpg/articlePhoto4.jpg";
import ArticleImage5 from "../assets/jpg/articlePhoto5.jpg";
import ArticleImage6 from "../assets/jpg/articlePhoto6.jpg";

function Articles() {
  const [page, setPage] = useState(1);

  const articlesPerPage = 3;
  const articles = [
    { id: 1, headingName: "Grilled Tomatoes at Home", image: ArticleImage1 },
    { id: 2, headingName: "Snacks for Travel", image: ArticleImage2 },
    { id: 3, headingName: "Post-workout Recipes", image: ArticleImage3 },
    { id: 4, headingName: "How To Grill Corn", image: ArticleImage4 },
    { id: 5, headingName: "Crunchwrap Supreme", image: ArticleImage5 },
    { id: 6, headingName: "Broccoli Cheese Soup", image: ArticleImage6 },
  ];

  const pageCount = Math.ceil(articles.length / articlesPerPage);

  const handleNextPage = () => {
    setPage((prev) => (prev < pageCount ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const startIndex = (page - 1) * articlesPerPage;
  const displayedArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );
  return (
    <Box
      ml={{ md: "2.75rem", lg: "4.75rem", xl: "6.75rem" }}
      mr={{ md: "2.75rem", lg: "4.75rem", xl: "6.75rem" }}
      mt="9.875rem"
    >
      <Heading
        fontFamily="Source Sans Pro"
        fontWeight="600"
        fontSize="56px"
        lineHeight="42px"
        letterSpacing="0.04em"
        color="#0E2368"
        className="articleMainHeading"
      >
        Latest Articles
      </Heading>
      <Flex wrap="true" gap="2.5625rem" mt="4.25rem" flexDirection="row">
        {displayedArticles.map((article) => (
          <ArticleCard
            key={article.id}
            headingName={article.headingName}
            image={article.image}
          />
        ))}
      </Flex>
      <Flex justifyContent="center" mt="4rem">
        <ButtonGroup>
          <Button
            border="1px solid #AFAFAF"
            borderRadius="5px"
            bg="#FFFFFF"
            onClick={handlePrevPage}
          >
            <AiOutlineLeft />
          </Button>
          <span className="pageNo" style={{ marginTop: "0.25rem" }}>
            {page}/2
          </span>
          <Button
            border="1px solid #AFAFAF"
            borderRadius="5px"
            bg="#FFFFFF"
            onClick={handleNextPage}
          >
            <AiOutlineRight />
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
export default Articles;
