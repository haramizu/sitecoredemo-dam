import { Button } from "@chakra-ui/react";

export const LoginButton = () => {
  return (
    <Button as="a" href="/api/auth/login" marginX={1}>
      Log In
    </Button>
  );
};
