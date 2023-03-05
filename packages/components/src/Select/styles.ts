import { ThemeProps } from '../../../core/src';
import { SELECT_SCOPE_NAME, OPTION_ITEM_SCOPE_NAME, OPTION_GROUP_SCOPE_NAME } from './const';

const getSelectStyles = (theme: ThemeProps) => {
    return `
            .${SELECT_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

const getOptionItemStyles = (theme: ThemeProps) => {
    return `
            .${OPTION_ITEM_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

const getOptionGroupStyles = (theme: ThemeProps) => {
    return `
            .${OPTION_GROUP_SCOPE_NAME} {
                margin: 0;
            }
        `;
};

export { getSelectStyles, getOptionItemStyles, getOptionGroupStyles };
