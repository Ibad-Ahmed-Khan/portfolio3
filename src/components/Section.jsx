import { Box, Flex, VStack, Text, Img } from "@chakra-ui/react";

import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const Section = () => { 

  return (
    <Flex align="center" justify="center" id="section" h={{
          base: "123vh",
          md: "123vh",
          lg: "100vh",
          xl: "100vh",
        }}>
      <Flex
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        align="center"
        justify="center"
        h="full"
        gap="2rem"
        color="white"
        bg="#000025"
        paddingInline="5rem"
      >
        <VStack
          w="full"
          marginInline={{
            base: "0", // for small screens
            md: "0", // for medium screens
            lg: "0", // for large screens
            xl: "8rem", // for large screens
          }}
          align="start"
          justify="space-evenly"
          
        >
          <Text
           data-aos="fade-up" 
            fontSize="4xl"
            fontWeight="bold"
            letterSpacing="1px"
            textTransform="uppercase"
          >
            Welcome to{" "}
            <Text as="span" color="#800080">
              my website
            </Text>
          </Text>
          <Text 
           data-aos="fade-up"  >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ex sed aperiam amet eligendi, laborum dolorem, fugit,
            soluta cumque alias ipsam dolor aut quam harum repellat beatae ad
            cupiditate eos!
          </Text>
          <Flex w="full" gap="2rem">
            <Box
              as={IoLogoFacebook}
              color="#800080"
              size="2em"
              cursor="pointer"
              borderRadius="50%"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2) rotate(20deg)",
                boxShadow:
                  "0 4px 8px rgba(128, 0, 128, 0.6), 0 0 40px rgba(128, 0, 128, 0.8), 0 15px 15px rgba(0, 0, 0, 0.6)",
              }}
            />
            <Box
              as={IoLogoTwitter}
              color="#800080"
              size="2em"
              cursor="pointer"
              borderRadius="50%"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2) rotate(20deg)",
                boxShadow:
                  "0 4px 8px rgba(128, 0, 128, 0.6), 0 0 40px rgba(128, 0, 128, 0.8), 0 15px 15px rgba(0, 0, 0, 0.6)",
              }}
            />
            <Box
              as={IoLogoInstagram}
              color="#800080"
              size="2em"
              cursor="pointer"
              borderRadius="50%"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2) rotate(20deg)",
                boxShadow:
                  "0 4px 8px rgba(128, 0, 128, 0.6), 0 0 40px rgba(128, 0, 128, 0.8), 0 15px 15px rgba(0, 0, 0, 0.6)",
              }}
            />
            <Box
              as={IoLogoLinkedin}
              color="#800080"
              size="2em"
              cursor="pointer"
              borderRadius="50%"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2) rotate(20deg)",
                boxShadow:
                  "0 4px 8px rgba(128, 0, 128, 0.6), 0 0 40px rgba(128, 0, 128, 0.8), 0 15px 15px rgba(0, 0, 0, 0.6)",
              }}
            />
          </Flex>
        </VStack>

        <Flex align="center" justify="center">
          <Box
           data-aos="fade-up" 
            boxShadow="rgba(0, 0, 0, 0.16) 0px 90px 94px, rgba(0, 0, 0, 1) 0px 0px 0px 3px;"
            w={{
              base: "15rem", // for small screens
              md: "20rem", // for medium screens
              lg: "20rem", // for large screens
            }}
            h={{
              base: "15rem", // for small screens
              md: "20rem", // for medium screens
              lg: "20rem", // for large screens
            }}
            borderRadius="50%"
          >
            <Img
              w={{
                base: "15rem", // for small screens
                md: "20rem", // for medium screens
                lg: "20rem", // for large screens
              }}
              h={{
                base: "15rem", // for small screens
                md: "20rem", // for medium screens
                lg: "20rem", // for large screens
              }}
              boxShadow="rgba(128, 0, 128, 56) 0px 0px 100px 15px"
              borderRadius="50%"
              src="https://i.pinimg.com/564x/40/2b/9c/402b9c7af0dcbb781dc30837cd7402b5.jpg"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section;
