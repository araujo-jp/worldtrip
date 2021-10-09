import { Flex, Grid, Image, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath !== '/';

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={['70px', '100px']}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {isHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}

        <Image
          src="/logo.svg"
          alt="logo worldtrip"
          justifySelf="center"
          gridColumn="2"
          width={['150px', '184px']}
        />
      </Grid>
    </Flex>
  );
}
