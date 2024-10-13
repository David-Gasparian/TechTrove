import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const VStack = (props: VStackProps) => (
    <Flex direction="column" {...props} />
);
