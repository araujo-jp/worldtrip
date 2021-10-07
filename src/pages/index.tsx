import Head from 'next/head';
import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner/index';
import { TravelTypes } from '../components/TravelTypes';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home | worldtrip</title>
    </Head>
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
    </Flex>
  </>
);

export default Home;
