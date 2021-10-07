import Head from 'next/head';
import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';

import { Header } from '../components/Header';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home | worldtrip</title>
    </Head>
    <Flex direction="column">
      <Header />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias beatae
        ipsum, dolor blanditiis accusantium facilis sit voluptas facere
        laudantium totam obcaecati suscipit magni perspiciatis exercitationem
        deleniti ad, temporibus possimus atque.
      </p>
    </Flex>
  </>
);

export default Home;
