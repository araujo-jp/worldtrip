import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home | worldtrip</title>
    </Head>
    <Flex direction="column">
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
