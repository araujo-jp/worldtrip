import { Flex, Grid, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      bgColor="white"
      width="100%"
      marginX="auto"
      paddingX="1rem"
      height={['50px', '100px']}
      align="center"
      justify="center"
    >
      <Grid
        height="100%"
        marginX="auto"
        width="100%"
        maxWidth={1160}
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          src="/logo.svg"
          alt="logo worldtrip"
          justifySelf="center"
          gridColumn="2"
          width={['81px', '184px']}
        />
      </Grid>
    </Flex>
  );
}
