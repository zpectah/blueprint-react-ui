import { ThemeProps } from '../../../core/src';
import { TAG_INPUT_ROOT_CLASSNAME } from './const';

export const getTagInputStyles = (theme: ThemeProps) => {
    return `
            .${TAG_INPUT_ROOT_CLASSNAME} {
                margin: 0;
            }
        `;
};
