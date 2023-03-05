import { ThemeProps } from '../../../core/src';
import { RADIO_SCOPE_NAME, RADIO_ELEMENT_CLASSNAME } from './const';

const getRadioElementStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_ELEMENT_CLASSNAME} {
                margin: 0;
            }
        `;
};

const getRadioStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export { getRadioElementStyles, getRadioStyles };
