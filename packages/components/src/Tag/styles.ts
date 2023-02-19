import { ThemeProps, DISABLED_STATE_CLASSNAME } from '../../../core/src';
import {
    TAG_SCOPE_NAME,
    TAG_LABEL_CLASSNAME,
    TAG_ACTION_CLASSNAME,
    TAG_CLICKABLE_CLASSNAME,
    TAG_DISMISSIBLE_CLASSNAME,
} from './const';

const getTagStyles = (theme: ThemeProps) => {
    return `
            .${TAG_SCOPE_NAME} {
                font-family: ${theme.typography.fontFamily.base};
                font-size: 1rem;
                line-height: ${theme.typography.lineHeight.base};
                color: inherit;
                display: inline-flex;
            }
            .${TAG_CLICKABLE_CLASSNAME} {
                cursor: pointer;
            }
            .${TAG_DISMISSIBLE_CLASSNAME} {}            

            .${TAG_SCOPE_NAME}.${DISABLED_STATE_CLASSNAME} {
                cursor: not-allowed;
            } 
            
            /* Label */
            .${TAG_LABEL_CLASSNAME} {}
            
            /* Action */
            .${TAG_ACTION_CLASSNAME} {
                cursor: pointer;
            }
            
            /* Size */
            .${TAG_SCOPE_NAME}--sm {}
            .${TAG_SCOPE_NAME}--lg {}
                
            /* Variant */
            .${TAG_SCOPE_NAME}--filled {}
            .${TAG_SCOPE_NAME}--outlined {}
            
            /* Color */
            .${TAG_SCOPE_NAME}--primary {}
            .${TAG_SCOPE_NAME}--primary:hover {}
            .${TAG_SCOPE_NAME}--primary:active {}
            .${TAG_SCOPE_NAME}--primary:focus {}
        
            .${TAG_SCOPE_NAME}--secondary {}
            .${TAG_SCOPE_NAME}--secondary:hover {}
            .${TAG_SCOPE_NAME}--secondary:active {}
            .${TAG_SCOPE_NAME}--secondary:focus {}                    
        
            .${TAG_SCOPE_NAME}--info {}
            .${TAG_SCOPE_NAME}--info:hover {}
            .${TAG_SCOPE_NAME}--info:active {}
            .${TAG_SCOPE_NAME}--info:focus {}   
        
            .${TAG_SCOPE_NAME}--success {}
            .${TAG_SCOPE_NAME}--success:hover {}
            .${TAG_SCOPE_NAME}--success:active {}
            .${TAG_SCOPE_NAME}--success:focus {}
        
            .${TAG_SCOPE_NAME}--warning {}
            .${TAG_SCOPE_NAME}--warning:hover {}
            .${TAG_SCOPE_NAME}--warning:active {}
            .${TAG_SCOPE_NAME}--warning:focus {}
        
            .${TAG_SCOPE_NAME}--error {}
            .${TAG_SCOPE_NAME}--error:hover {}
            .${TAG_SCOPE_NAME}--error:active {}
            .${TAG_SCOPE_NAME}--error:focus {} 
            
        `;
};

export default getTagStyles;
