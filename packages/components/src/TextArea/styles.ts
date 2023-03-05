import { ThemeProps } from '../../../core/src';
import { TEXT_AREA_SCOPE_NAME } from './const';

const getTextAreaStyles = (theme: ThemeProps) => {
    return `
            .${TEXT_AREA_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export default getTextAreaStyles;
