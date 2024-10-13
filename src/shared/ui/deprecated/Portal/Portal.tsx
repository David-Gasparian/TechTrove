import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: Element;
}

/**
 * @deprecated *Deprecated, use new components from the redesigned folder*
 */
export const Portal: FC<PortalProps> = (props) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
