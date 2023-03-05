import { ThemeProps, DISABLED_STATE_CLASSNAME } from '../../../core/src';
import {
    TAG_ROOT_CLASSNAME,
    TAG_LABEL_CLASSNAME,
    TAG_ACTION_CLASSNAME,
    TAG_CLICKABLE_CLASSNAME,
    TAG_DISMISSIBLE_CLASSNAME,
} from './const';

const getTagStyles = (theme: ThemeProps) => {
    return `
            .${TAG_ROOT_CLASSNAME} {
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

            .${TAG_ROOT_CLASSNAME}.${DISABLED_STATE_CLASSNAME} {
                cursor: not-allowed;
            } 
            
            /* Label */
            .${TAG_LABEL_CLASSNAME} {}
            
            /* Action */
            .${TAG_ACTION_CLASSNAME} {
                cursor: pointer;
            }
            
            /* Size */
            .${TAG_ROOT_CLASSNAME}--sm {}
            .${TAG_ROOT_CLASSNAME}--lg {}
                
            /* Variant */
            .${TAG_ROOT_CLASSNAME}--filled {}
            .${TAG_ROOT_CLASSNAME}--outlined {}
            
            /* Color */
            .${TAG_ROOT_CLASSNAME}--primary {}
            .${TAG_ROOT_CLASSNAME}--primary:hover {}
            .${TAG_ROOT_CLASSNAME}--primary:active {}
            .${TAG_ROOT_CLASSNAME}--primary:focus {}
        
            .${TAG_ROOT_CLASSNAME}--secondary {}
            .${TAG_ROOT_CLASSNAME}--secondary:hover {}
            .${TAG_ROOT_CLASSNAME}--secondary:active {}
            .${TAG_ROOT_CLASSNAME}--secondary:focus {}                    
        
            .${TAG_ROOT_CLASSNAME}--info {}
            .${TAG_ROOT_CLASSNAME}--info:hover {}
            .${TAG_ROOT_CLASSNAME}--info:active {}
            .${TAG_ROOT_CLASSNAME}--info:focus {}   
        
            .${TAG_ROOT_CLASSNAME}--success {}
            .${TAG_ROOT_CLASSNAME}--success:hover {}
            .${TAG_ROOT_CLASSNAME}--success:active {}
            .${TAG_ROOT_CLASSNAME}--success:focus {}
        
            .${TAG_ROOT_CLASSNAME}--warning {}
            .${TAG_ROOT_CLASSNAME}--warning:hover {}
            .${TAG_ROOT_CLASSNAME}--warning:active {}
            .${TAG_ROOT_CLASSNAME}--warning:focus {}
        
            .${TAG_ROOT_CLASSNAME}--error {}
            .${TAG_ROOT_CLASSNAME}--error:hover {}
            .${TAG_ROOT_CLASSNAME}--error:active {}
            .${TAG_ROOT_CLASSNAME}--error:focus {} 
            
        `;
};

export default getTagStyles;
