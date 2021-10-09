import {
  Flex,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

interface InfoItemProps {
  num: number;
  text: string;
  // eslint-disable-next-line react/require-default-props
  popover?: boolean;
}

export function InfoItem({ num, text, popover = false }: InfoItemProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      align={['flex-start', 'flex-start', 'center']}
    >
      <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="bold">
        {num}
      </Heading>
      <Flex direction={['row']} align="center" justify="end" w="100%">
        <Text fontWeight="600" fontSize={['md', 'xl']} color="gray.700">
          {text}
        </Text>
        {popover && (
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={['15px', '20px']}
                  h={['15px', '20px']}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                  dolorem.
                </span>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Flex>
    </Flex>
  );
}
