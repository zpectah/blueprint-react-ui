import { ThemeProps } from '../../../core/src';
import { SELECT_ROOT_CLASSNAME, OPTION_ITEM_SCOPE_NAME, OPTION_GROUP_SCOPE_NAME } from './const';

export const getSelectStyles = (theme: ThemeProps) => {
    return `
            .${SELECT_ROOT_CLASSNAME} {
                margin: 0;
            }
        `;
};

export const getOptionItemStyles = (theme: ThemeProps) => {
    return `
            .${OPTION_ITEM_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export const getOptionGroupStyles = (theme: ThemeProps) => {
    return `
            .${OPTION_GROUP_SCOPE_NAME} {
                margin: 0;
            }
        `;
};
