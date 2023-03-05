import { ThemeProps } from '../../../core/src';
import { RADIO_ROOT_CLASSNAME, RADIO_ELEMENT_CLASSNAME } from './const';

export const getRadioElementStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_ELEMENT_CLASSNAME} {
                margin: 0;
            }
        `;
};

export const getRadioStyles = (theme: ThemeProps) => {
    return `
            .${RADIO_ROOT_CLASSNAME} {
                margin: 0;
            }
            .${RADIO_ROOT_CLASSNAME}-label {
                margin: 0;
            }            
        `;
};
