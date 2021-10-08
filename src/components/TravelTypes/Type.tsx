import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TypeProps {
  icon: string;
  text: string;
}

export function Type({ icon, text }: TypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  });

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isWideVersion ? (
        <Image
          src={`/icons/${icon}`}
          width="85px"
          height="85px"
          marginBottom="6"
        />
      ) : (
        <Text color="yellow.400" fontSize={['4xl']} mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  );
}