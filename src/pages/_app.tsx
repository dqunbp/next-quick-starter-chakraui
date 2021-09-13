import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import LanguageProvider from "lib/language-provider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </LanguageProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
