import { ThemeProps } from '../../../core/src';
import { CHECKBOX_ROOT_CLASSNAME, CHECKBOX_ELEMENT_CLASSNAME } from './const';

export const getCheckboxElementStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_ELEMENT_CLASSNAME} {
                margin: 0;
            }
        `;
};

export const getCheckboxStyles = (theme: ThemeProps) => {
    return `
            .${CHECKBOX_ROOT_CLASSNAME} {
                margin: 0;
            }
            .${CHECKBOX_ROOT_CLASSNAME}-label {
                margin: 0;
            }            
        `;
};
