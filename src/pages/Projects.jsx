import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react";


const Projects = () => {
  return (
    <VStack
      
      id="projects"
      gap="5rem"
      pt="10rem"
      pb="10rem"
      paddingInline="2rem"
      color="white"
      bg="#000025"
      
    >
      <Text
       data-aos="zoom-out-down"
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
        projects
      </Text>

      <Flex
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        align="center"
        justify="center"
        w="full"
        gap="2rem"
      >
        <Box data-aos="zoom-out-up"
          data-aos-duration="1300"
          border="2px solid black"
          borderRadius="1rem"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 10px 5px"
        >
          <Img
            borderRadius="1rem"
            cursor="pointer"
            w="15rem"
            h="10rem"
            src="https://i.pinimg.com/564x/4a/d2/c8/4ad2c836bfa01a1724ba0289ea0eff57.jpg"
          />
        </Box>

        <Box data-aos="zoom-out-down"
          data-aos-duration="1300"
          border="2px solid black"
          borderRadius="1rem"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 10px 5px"
        >
          <Img
            borderRadius="1rem"
            cursor="pointer"
            w="15rem"
            h="10rem"
            src="https://i.pinimg.com/564x/a8/f7/48/a8f748ffb6e299c06bb1db5f4908479a.jpg"
          />
        </Box>

        <Box data-aos="zoom-out-up"
          data-aos-duration="1300"
          border="2px solid black"
          borderRadius="1rem"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 10px 5px"
        >
          <Img
            borderRadius="1rem"
            cursor="pointer"
            w="15rem"
            h="10rem"
            src="https://i.pinimg.com/564x/c6/8d/42/c68d42a4ac13729d211af7dd62ab1bad.jpg"
          />
        </Box>

        <Box data-aos="zoom-out-down"
          data-aos-duration="1300"
          border="2px solid black"
          borderRadius="1rem"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 10px 5px"
        >
          <Img
            borderRadius="1rem"
            cursor="pointer"
            w="15rem"
            h="10rem"
            src="https://i.pinimg.com/564x/8f/2a/f2/8f2af282ece8db6068c3ef57495c2465.jpg"
          />
        </Box>
      </Flex>
    </VStack>
  );
};

export default Projects;
