import { ThemeProps } from '../../../core/src';
import { BADGE_ROOT_CLASSNAME } from './const';

export const getBadgeElementStyles = (theme: ThemeProps) => {
    return `
            .${BADGE_ROOT_CLASSNAME} {
                margin: 0;
            }
        `;
};
