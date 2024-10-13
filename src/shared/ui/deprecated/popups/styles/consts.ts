import { DropdownDirection } from '@/shared/types/ui';
import popupCls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': popupCls.optionsBottomLeft,
    'bottom right': popupCls.optionsBottomRight,
    'top right': popupCls.optionsTopRight,
    'top left': popupCls.optionsTopLeft,
};
