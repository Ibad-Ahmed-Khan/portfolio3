import { Flex, Box, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import React from "react";

import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
  return (
    <Flex
      bg="#00001A"
      align="center"
      justify="center"
      p="50"
      gap="2rem"
      paddingInline="6rem"
      color="white"
      flexDirection={{
        base: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}
    >
      <VStack w="20rem" h="10rem" align="start">
        <Text fontWeight="bolder" letterSpacing="2px" fontSize="1.3rem">
          <ChakraLink
            as={ScrollLink}
            to="section"
            smooth={true}
            duration={500}
            _hover={{ textDecoration: "none" }} // Apply hover style
          >
            Logo
          </ChakraLink>
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illo
          voluptatum quia nemo, vitae suscipit sit eius vero beatae amet.
        </Text>
      </VStack>
      <VStack w="20rem" h="10rem" align="start">
        <Text color="#800080" fontSize="xl" textTransform="uppercase">
          services
        </Text>
        <Text>Web Desgin</Text>
        <Text>Web Development</Text>
        <Text>SEO</Text>
        <Text>E-commerce</Text>
      </VStack>
      <VStack w="20rem" h="10rem" align="start">
        <Text color="#800080" fontSize="xl" textTransform="uppercase">
          contact
        </Text>
        <Text>Email: ibadahmedkhan90@gmail.com</Text>
        <Text>Phone: +92233614637</Text>
      </VStack>
      <VStack w="20rem" h="10rem" align="start">
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
    </Flex>
  );
};

export default Footer;
