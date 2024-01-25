
import { Box, Button, Flex, Img, Text, VStack } from "@chakra-ui/react";

const About = () => {

  return (
    <Flex
      id="about"
      align="center"
      justify="center"
      color="white"
      p={{
        base: "70",
        md: "100",
        lg: "100",
        xl: "100",
      }}
      gap="8rem"
      bg="#000025"
      flexDirection={{
        base: "column-reverse",
        md: "column-reverse",
        lg: "row",
        xl: "row",
      }}
      h={{
          base: "",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        }}
    >
      <Box

          data-aos="zoom-out-down"
          data-aos-duration="1300"
        border="2px solid black"
        boxShadow="rgba(128, 0, 128, 56) 0px 0px 100px 15px"
      >
        <Img
        
          w={{
            base: "15rem",
            md: "15rem",
            lg: "45rem",
            xl: "45rem",
          }}
          src="https://i.pinimg.com/564x/9e/05/fa/9e05fa9e2ffc218cc477043e340730d2.jpg"
        />
      </Box>
      <VStack align="start" justify="space-between">
        <Text
          as="span"
          data-aos="zoom-out-right"
          data-aos-duration="1300"
          textTransform="uppercase"
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing="1px"
          color="#800080"
        >
          about me
        </Text>

        <Text 
          data-aos="zoom-out-left"
          data-aos-duration="1300" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          error commodi repellat nostrum fuga consectetur praesentium quod!
          Quisquam praesentium, accusantium voluptatum sapiente vel a fugit
          necessitatibus tempora voluptates! Ipsam officia sequi ducimus.
        </Text>

        <Button  
          data-aos="zoom-out"
          data-aos-duration="1300" color="white" bg="transparent" border="2px solid #800080">
          Resume
        </Button>
      </VStack>
    </Flex>
  );
};

export default About;
