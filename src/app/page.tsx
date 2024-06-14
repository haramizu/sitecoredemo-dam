"use client";

import { NavBarButtons } from "@/components/navigation/nav-bar-buttons";
import {
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Flex
          as="header"
          align="center"
          justify="space-between"
          padding="1rem"
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
        >
          <Flex flex="2" align="center" justify="flex-end">
            <NavBarButtons />
          </Flex>
        </Flex>
      </header>
      <Flex as="main" height="calc(100vh)" background={"chakra-body-bg"}>
        <Flex w="full" alignItems="center" my="16">
          <Container>
            <Image
              mb="8"
              h="24"
              src={useColorModeValue(
                "https://sitecorecontenthub.stylelabs.cloud/api/public/content/37768281ce944bafb141bc1d4741fae1",
                "https://sitecorecontenthub.stylelabs.cloud/api/public/content/507bd1b6eaa04385b07cfe44a424e053"
              )}
              alt="Sitecore Blok logo"
            />
            <Stack spacing="6" align="start">
              <Heading as="h1" size="xl">
                Build better products faster
              </Heading>
              <Text variant="subtle" maxW="prose">
                Blok is{" "}
                <NextLink href="https://www.sitecore.com">Sitecore’s</NextLink>{" "}
                product design system: the UI framework and style guide we use
                to build great apps. It’s publicly available, so that anyone can
                easily build software in the Sitecore design language.
              </Text>
              <Button
                as={NextLink}
                href="https://blok.sitecore.com/get-started"
              >
                Get started
              </Button>
            </Stack>
          </Container>
        </Flex>
        <NextLink href="https://www.sitecore.com">
          <Image
            m="8"
            h="10"
            src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-sitecore"
            alt="Sitecore logo"
            position={"absolute"}
            bottom={"0"}
            right={"0"}
          />
        </NextLink>
      </Flex>
    </>
  );
}
