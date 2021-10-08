import { Flex, Heading, Text } from '@chakra-ui/react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Slider() {
  return (
    <Flex
      width="100%"
      maxWidth="1240px"
      mx="auto"
      mb={['5', '10']}
      height={['250px', '450px']}
    >
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000
        }}
        style={{
          width: '100%',
          flex: '1'
        }}
      >
        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/slide/europe.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continente/europa">
              <a>
                <Heading>Europa</Heading>
                <Text>O continente mais antigo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        {/* Olá mundo */}
        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/slide/europe.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continente/europa">
              <a>
                <Heading>Europa</Heading>
                <Text>O continente mais antigo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/slide/europe.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continente/europa">
              <a>
                <Heading>Europa</Heading>
                <Text>O continente mais antigo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
