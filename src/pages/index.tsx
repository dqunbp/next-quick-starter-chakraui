import { t, Trans } from "@lingui/macro";

import Head from "next/head";

import LangSwitcher from "components/language-switcher";
import { useQuery } from "react-query";
import { getHello } from "requests/hello";
import { useLingui } from "@lingui/react";
import { Box } from "@chakra-ui/layout";

function Home() {
  const query = useQuery("hello", getHello);

  const { i18n } = useLingui();

  return (
    <Box
      minH="100vh"
      py={0}
      px={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        {/* <Trans> doesnt works here */}
        <title>{i18n._(t`Create Next App`)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        as="main"
        py={20}
        px={0}
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <LangSwitcher />
        <Box as="h1" m={0} letterSpacing={1} fontSize="6xl" textAlign="center">
          <Trans>Welcome to</Trans>{" "}
          <Box
            as="a"
            textColor="blue.500"
            textDecoration="none"
            _hover={{ textDecoration: "underline" }}
            _focus={{ textDecoration: "underline" }}
            _active={{ textDecoration: "underline" }}
            href="https://nextjs.org"
          >
            Next.js!
          </Box>
        </Box>

        <Box
          as="p"
          textAlign="center"
          letterSpacing={1.2}
          fontSize="2xl"
          mt={4}
        >
          <Trans>Get started by editing</Trans>{" "}
          <Box as="code" fontFamily="mono" fontSize="lg" p={3}>
            pages/index.js
          </Box>
        </Box>

        <Box
          as="code"
          bg="gray.50"
          rounded="md"
          fontSize="lg"
          fontFamily="mono"
        >
          {query.isLoading
            ? i18n._(t`Fetches the hello api...`)
            : i18n._(t`API Response:`) + ` ${JSON.stringify(query.data)}`}
        </Box>

        <Box
          display="flex"
          flexDirection={["column", "row"]}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          maxW="container.md"
          mt={12}
        >
          <a
            href="https://nextjs.org/docs"
            style={{ flexBasis: "45%" }}
            className="m-4 p-6 text-left no-underline border rounded-xl
            transition duration-150 ease-in-out 
            hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-2xl">
              <Trans>Documentation</Trans> &rarr;
            </h3>
            <p className="text-xl leading-6">
              <Trans>
                Find in-depth information about Next.js features and API.
              </Trans>
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            style={{ flexBasis: "45%" }}
            className="m-4 p-6 text-left no-underline border rounded-xl 
            transition duration-150 ease-in-out 
            hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-2xl">
              <Trans>Learn</Trans> &rarr;
            </h3>
            <p className="text-xl leading-6">
              <Trans>
                Learn about Next.js in an interactive course with quizzes!
              </Trans>
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            style={{ flexBasis: "45%" }}
            className="m-4 p-6 text-left no-underline border rounded-xl 
            transition duration-150 ease-in-out 
            hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-2xl">
              <Trans>Examples</Trans> &rarr;
            </h3>
            <p className="text-xl leading-6">
              <Trans>
                Discover and deploy boilerplate example Next.js projects.
              </Trans>
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            style={{ flexBasis: "45%" }}
            className="m-4 p-6 text-left no-underline border rounded-xl 
            transition duration-150 ease-in-out 
            hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-2xl">
              <Trans>Deploy</Trans> &rarr;
            </h3>
            <p className="text-xl leading-6">
              <Trans>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Trans>
            </p>
          </a>
        </Box>
      </Box>

      <footer className="w-full h-24 border-t flex justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <Trans>Powered by</Trans>{" "}
          <img className="ml-2 h-4" src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </Box>
  );
}

export default Home;
