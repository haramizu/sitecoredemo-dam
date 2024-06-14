import { Button } from "@chakra-ui/react";

export const SignupButton = () => {
  return (
    <Button as="a" href="/api/auth/signup" marginX={1}>
      Sign Up
    </Button>
  );
};
