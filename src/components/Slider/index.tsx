import { Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

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
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000
        }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/slider/europe.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
          >
            <Link href="/continente/europa">
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
