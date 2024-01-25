import {
  VStack,
  Text,
  Input,
  Textarea,
  Button,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <VStack
    align="center"
    justify="center"
      id="contact"
      color="white"
      bg="#000025"
      gap="5rem"
      pt="10rem"
      pb="10rem"
      paddingInline="2rem"
    >
      <Text
      data-aos="zoom-out-right"
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
        Contact
      </Text>
      <SimpleGrid spacing="10">
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          <Input data-aos="zoom-out-right"
            bg="#303060"
            boxShadow="rgba(128, 0, 128, 6) 0px 0px 20px 2px"
            type="text"
            placeholder="Your Name"
            
            variant="filled"
          />
          <Input         
          data-aos="zoom-out-left"
            data-aos-duration="1300"
            bg="#303060"
            boxShadow="rgba(128, 0, 128, 6) 0px 0px 20px 2px"
            type="email"
            placeholder="Your Email"
            
            variant="filled"
          />
        </Grid>

        <Textarea
        data-aos="zoom-out-up"
          data-aos-duration="1300"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 20px 2px"
          placeholder="Leave your message here..."
          // resize="none"
          bg="#303060"
          h="14rem"
          variant="filled"
        />
        <Button data-aos="zoom-out"
          data-aos-duration="1300"
          w="full"
          boxShadow="rgba(128, 0, 128, 6) 0px 0px 20px 2px"
          colorScheme="purple"
          size="lg"
        >
          Submit
        </Button>
      </SimpleGrid>
    </VStack>
  );
};

export default Contact;
