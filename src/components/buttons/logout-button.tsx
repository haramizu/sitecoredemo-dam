import { Button } from "@chakra-ui/react";

export const LogoutButton = () => {
  return (
    <Button as="a" href="/api/auth/logout" marginX={1}>
      Log Out
    </Button>
  );
};
