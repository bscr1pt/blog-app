import Link from 'next/link';
import { Box, Heading, Flex, Text, Input, Avatar } from "@chakra-ui/core";
import React, {useState} from 'react';

const MenuItems = ({ children }) => (
  <div style={{cursor: 'pointer'}} >
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </div>
);

const Navbar = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.8rem"
      bg="teal.500"
      color="white"
      position='fixed'
      top='0'
      width='100%'
      {...props}
    >
      <Flex align="center" mr={5}>
       <div style={{cursor: 'pointer'}} >
        <Link href="/">
            <Heading as="h1" size="lg">
              Blog
            </Heading>
          </Link>
        </div>
      </Flex>

      <Box
        display={{ sm: "block", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1} >

        <MenuItems>
          <Link href="/about">About</Link>
        </MenuItems>
      </Box>
      <div style={{paddingRight: '25px'}}>
        <Input type="text" color="black" placeholder='Search by tag..' onChange={(e) => props.changeFilter(e.target.value)}/>
      </div>
      <div >
        <Avatar
          src="https://avatars3.githubusercontent.com/u/54212428?s=280&v=4"
          name="Just a man" />
      </div>
    </Flex>
  );
}

export default Navbar;