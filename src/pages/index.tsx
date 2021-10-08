import Head from 'next/head';
import type { NextPage } from 'next';
import { Flex, Heading } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner/index';
import { TravelTypes } from '../components/TravelTypes';
import { Divider } from '../components/Divider';
import { Slider } from '../components/Slider';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home | worldtrip</title>
    </Head>
    <Header />
    <Flex direction="column">
      <Banner />
      <TravelTypes />
      <Divider />
      <Heading
        fontWeight="500"
        align="center"
        fontSize={['lg', '3xl', '4xl']}
        mb={['5', '14']}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  </>
);

export default Home;
