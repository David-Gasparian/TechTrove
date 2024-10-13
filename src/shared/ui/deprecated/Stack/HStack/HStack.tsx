import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);
