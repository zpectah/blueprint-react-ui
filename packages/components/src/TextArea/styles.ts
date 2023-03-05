import { ThemeProps } from '../../../core/src';
import { TEXT_AREA_ROOT_CLASSNAME } from './const';

export const getTextAreaStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_AREA_ROOT_CLASSNAME} {
                margin: 0;
            }
        `;
};
