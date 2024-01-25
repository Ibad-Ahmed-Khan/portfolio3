import React from "react";
import {
  Box,
  Flex,
  GridItem,
  SimpleGrid,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link as ChakraLink, // Import Chakra UI Link component
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeDrawer = () => {
    onClose();
  };

  return (
    <Box w={{
          base: "80%",
          md: "  86%",
          lg: "full",
          xl: "full",
        }} pos="fixed" bg="#000025" zIndex="1" >
      <SimpleGrid
        alignItems="center"
        color="white"
        p="3"
        marginInline="5%"
        gridTemplateColumns="50% 50%"
      >
        <GridItem fontWeight="bolder" letterSpacing="2px" fontSize="1.3rem">
          <ChakraLink
            as={ScrollLink}
            to="section"
            smooth={true}
            duration={500}
            _hover={{ textDecoration: "none" }} // Apply hover style
            
          >
            Logo
          </ChakraLink>
        </GridItem>
        <GridItem>
          <Flex
            justify={{ base: "flex-end", md: "space-between" }}
            textTransform="capitalize"
          >
            <Flex
              display={{ base: "flex", md: "none" }}
              align="center"
              onClick={onOpen}
            >
              <IconButton
                aria-label="Open menu"
                icon={<HamburgerIcon />}
                size="lg"
                color="white"
                variant="none"
              />
            </Flex>
            <Flex
              w="full"
              display={{ base: "none", md: "flex" }}
              justify="space-evenly"
              // border="3px solid red"
            >
              <ChakraLink
                as={ScrollLink}
                to="section"
                smooth={true}
                duration={500}
                onClick={() => {
                  closeDrawer();
                }}
                position="relative"
              _hover={{
                textDecoration: "none",  // Remove default underline
                _after: {
                  width: "100%",
                },
              }}
                _after={{
                  content: "''",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "0",
                  height: "2px",
                  backgroundColor: "#800080",
                  transition: "width .25s ease-in-out",
                }}
                
                // Apply hover style
                
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="about"
                smooth={true}
                duration={500}
                onClick={() => {
                  closeDrawer();
                }}
                position="relative"
              _hover={{
                textDecoration: "none",  // Remove default underline
                _after: {
                  width: "100%",
                },
              }}
                _after={{
                  content: "''",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "0",
                  height: "2px",
                  backgroundColor: "#800080",
                  transition: "width .25s ease-in-out",
                }}
                // Apply hover style
                
              >
                About
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="services"
                smooth={true}
                duration={500}
                onClick={() => {
                  closeDrawer();
                }}
                position="relative"
              _hover={{
                textDecoration: "none",  // Remove default underline
                _after: {
                  width: "100%",
                },
              }}
                _after={{
                  content: "''",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "0",
                  height: "2px",
                  backgroundColor: "#800080",
                  transition: "width .25s ease-in-out",
                }}
                // Apply hover style
                
              >
                Services
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => {
                  closeDrawer();
                }}
                position="relative"
              _hover={{
                textDecoration: "none",  // Remove default underline
                _after: {
                  width: "100%",
                },
              }}
                _after={{
                  content: "''",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "0",
                  height: "2px",
                  backgroundColor: "#800080",
                  transition: "width .25s ease-in-out",
                }}
                // Apply hover style
                
              >
                Projects
              </ChakraLink>
              <ChakraLink
              as={ScrollLink}
              to="contact"
              smooth={true}
              duration={500}

              onClick={() => {
                closeDrawer();
              }}
              position="relative"
              _hover={{
                textDecoration: "none",  // Remove default underline
                _after: {
                  width: "100%",
                },
              }}
                _after={{
                  content: "''",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "0",
                  height: "2px",
                  backgroundColor: "#800080",
                  transition: "width .25s ease-in-out",
                }}
  
>
  Contact
</ChakraLink>
            </Flex>
          </Flex>
        </GridItem>
      </SimpleGrid>


      {/* Mobile navigation */}

      <Drawer   isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay  />
        <DrawerContent  >
          <DrawerCloseButton color="white" fontWeight="bolder" bg="red" />
          <DrawerHeader color="white" bg="#000013">
            Menu
          </DrawerHeader>
          <DrawerBody color="white" bg="#000013">
            <Flex direction="column" gap="1rem">
              <ChakraLink
                as={ScrollLink}
                to="section"
                smooth={true}
                duration={500}
                onClick={() => {
                  closeDrawer();
                }}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="about"
                smooth={true}
                duration={500}
                onClick={() => {
                  closeDrawer();
                }}
              >
                About
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="services"
                smooth={true}
                duration={500}
                onClick={() => {
                  closeDrawer();
                }}
              >
                Services
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => {
                  closeDrawer();
                }}
              >
                Projects
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => {
                  closeDrawer();
                }}
              >
                Contact
              </ChakraLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
