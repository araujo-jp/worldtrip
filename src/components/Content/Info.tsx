import { Flex } from '@chakra-ui/react';
import { InfoItem } from './InfoItem';

export function Info() {
  return (
    <>
      <Flex align="center" justify="space-between">
        <InfoItem num={50} text="países" />
        <InfoItem num={60} text="línguas" />
        <InfoItem num={27} text="cidades +100" popover />
      </Flex>
    </>
  );
}
