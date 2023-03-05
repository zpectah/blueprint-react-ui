import { ThemeProps } from '../../../core/src';
import { RADIO_ROOT_CLASSNAME, RADIO_ELEMENT_CLASSNAME } from './const';

const getRadioElementStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_ELEMENT_CLASSNAME} {
                margin: 0;
            }
        `;
};

const getRadioStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_ROOT_CLASSNAME} {
                margin: 0;
            }
            .${RADIO_ROOT_CLASSNAME}-label {
                margin: 0;
            }            
        `;
};

export { getRadioElementStyles, getRadioStyles };
