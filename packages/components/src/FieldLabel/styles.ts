import { ThemeProps } from '../../../core/src';
import { FIELD_LABEL_ROOT_CLASSNAME } from './const';

const getFieldLabelStyles = (theme: ThemeProps) => {
    return `
            .${FIELD_LABEL_ROOT_CLASSNAME} {
                margin: 0;
            }
            
            .${FIELD_LABEL_ROOT_CLASSNAME}--success {
                color: green;
            }
            .${FIELD_LABEL_ROOT_CLASSNAME}--warning {
                color: yellow;
            }
            .${FIELD_LABEL_ROOT_CLASSNAME}--error {
                color: red;
            }            
            
        `;
};

export default getFieldLabelStyles;
