import { ThemeProps } from '../../../core/src';
import { SWITCH_ROOT_CLASSNAME } from './const';

const getSwitchElementStyles = (theme: ThemeProps) => {
    return `
            .${SWITCH_ROOT_CLASSNAME} {
                margin: 0;
            }
        `;
};

export default getSwitchElementStyles;
