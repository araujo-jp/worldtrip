import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { ContinentBanner } from '../../components/ContinentBanner';
import { Content } from '../../components/Content';
import { Cities } from '../../components/Cities';

const Continent: NextPage = () => (
  <>
    <Head>
      <title>worldtrip | Europa</title>
    </Head>
    <Header />
    <Flex as="main" direction="column">
      <ContinentBanner />
      <Flex
        as="section"
        direction="column"
        width="100%"
        maxWidth="1160px"
        marginX="auto"
        mb="10"
        paddingX="1rem"
      >
        <Content />
        <Cities />
      </Flex>
    </Flex>
  </>
);

export default Continent;
