// app/providers.tsx
"use client";
import sitecoreTheme from "@sitecore/blok-theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      theme={sitecoreTheme}
      toastOptions={{
        defaultOptions: {
          position: "bottom-left",
          variant: "subtle",
          containerStyle: {
            mt: "0",
            mb: "4",
            mx: "4",
          },
        },
      }}
    >
      {children}
    </ChakraProvider>
  );
}
