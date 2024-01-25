import { Box, Flex, Text, VStack } from "@chakra-ui/react";


const Services = () => {
  return (
    <VStack
    align="center"
    justify="center"
      id="services"
      color="white"
      gap="5rem"
      pt="10rem"
      pb="10rem"
      paddingInline="2rem"
      bg="#000025"
      
      
    >
      <Text
        data-aos="zoom-out-up"
          data-aos-duration="1300"
        as="span"
        textTransform="uppercase"
        fontSize="4xl"
        fontWeight="bold"
        letterSpacing="1px"
        color="#800080"
        mt={{
          base: "4rem",
          md: "",
          lg: "0rem",
        }}
      >
        Services
      </Text>
      <Flex
        gap="2rem"
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Box

        data-aos="zoom-out-up"
          data-aos-duration="1300"
          border="2px solid #800080"
          p="10"
          borderTopLeftRadius="1rem"
          borderBottomRightRadius="1rem"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 10px 2px"
        >
          Html
        </Box>

        <Box

        data-aos="zoom-out-down"
          data-aos-duration="1300"
          border="2px solid #800080"
          p="10"
          borderTopLeftRadius="1rem"
          borderBottomRightRadius="1rem"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 10px 2px"
        >
          Css
        </Box>

        <Box

        data-aos="zoom-out-up"
          data-aos-duration="1300"
          border="2px solid #800080"
          p="10"
          borderTopLeftRadius="1rem"
          borderBottomRightRadius="1rem"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 10px 2px"
        >
          JavaScript
        </Box>
        <Box
        data-aos="zoom-out-down"
          data-aos-duration="1300"
          border="2px solid #800080"
          p="10"
          borderTopLeftRadius="1rem"
          borderBottomRightRadius="1rem"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 10px 2px"
        >
          React
        </Box>
      </Flex>
    </VStack>
  );
};

export default Services;
