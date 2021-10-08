import {
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue
} from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="section"
      width="100%"
      height={['163px', '250px', '250px', '335px']}
      backgroundImage="url('/banner.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      mx="auto"
      maxWidth={['1440px']}
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        width="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <div>
          <Heading
            fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
            color="gray.100"
            fontWeight="500"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text
            mt="5"
            color="gray.300"
            fontSize={['0.8rem', 'xl']}
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>

        {isWideVersion && (
          <Image
            width={417}
            src="/airplane.svg"
            transform="translateY(48px)"
            marginLeft="8"
            alt="Avião"
          />
        )}
      </Flex>
    </Flex>
  );
}
