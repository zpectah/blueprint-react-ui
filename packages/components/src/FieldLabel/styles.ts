import { ThemeProps, ColorValidationKey } from '../../../core/src';
import { FIELD_LABEL_ROOT_CLASSNAME } from './const';

export const getFieldLabelStyles = (theme: ThemeProps) => {
    return `
            .${FIELD_LABEL_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            .${FIELD_LABEL_ROOT_CLASSNAME}--${ColorValidationKey['success']} {
                color: ${theme.palette.success.dark};
            }
            .${FIELD_LABEL_ROOT_CLASSNAME}--${ColorValidationKey['warning']} {
                color: ${theme.palette.warning.dark};
            }
            .${FIELD_LABEL_ROOT_CLASSNAME}--${ColorValidationKey['error']} {
                color: ${theme.palette.error.dark};
            }            
            
        `;
};
