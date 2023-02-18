import { ThemeProps } from '../../../core/src';
import {
    TAG_SCOPE_NAME,
    TAG_LABEL_CLASSNAME,
    TAG_ACTION_CLASSNAME,
    TAG_CLICKABLE_CLASSNAME,
    TAG_DISMISSIBLE_CLASSNAME,
} from './const';

const getTagStyles = (theme?: ThemeProps) => {
    return `
            .${TAG_SCOPE_NAME} {
                font-family: ${theme?.typography?.fontFamily?.base};
                font-size: 1rem;
                line-height: ${theme?.typography?.lineHeight?.base};
                color: inherit;
                display: inline-flex;
            }
            .${TAG_CLICKABLE_CLASSNAME} {
                cursor: pointer;
            }
            .${TAG_DISMISSIBLE_CLASSNAME} {}            
            
            /* Label */
            .${TAG_LABEL_CLASSNAME} {}
            
            /* Action */
            .${TAG_ACTION_CLASSNAME} {
                cursor: pointer;
            }
        `;
};

export default getTagStyles;
