import Head from 'next/head';
import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner/index';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home | worldtrip</title>
    </Head>
    <Flex direction="column">
      <Header />
      <Banner />
    </Flex>
  </>
);

export default Home;
