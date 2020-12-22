import React from "react";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" mr={2}>
            LOGIN
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">REGISTER</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr={2} color="white">
          {data.me.username}
        </Box>
        <Button color="white" variant="link">
          LOGOUT
        </Button>
      </Flex>
    );
  }

  return (
    <Flex bg="tomato" padding={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
