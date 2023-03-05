import { ThemeProps } from '../../../core/src';
import { TEXT_ROOT_CLASSNAME } from './const';

export const getTextStyles = (theme: ThemeProps) => {
    return `
        .${TEXT_ROOT_CLASSNAME} {
            font-family: ${theme.typography.fontFamily.base};
            line-height: ${theme.typography.lineHeight.base};
            color: ${theme.palette.text.primary};
        }
        .${TEXT_ROOT_CLASSNAME}:is(p) {
            font-size: inherit;
        }
        .${TEXT_ROOT_CLASSNAME}:is(span) {
            font-size: inherit;
        }
        .${TEXT_ROOT_CLASSNAME}:is(small) {
            font-size: .75rem;
        }
        .${TEXT_ROOT_CLASSNAME}:is(em) {
            font-size: inherit;
        }
        .${TEXT_ROOT_CLASSNAME}:is(a) {
            font-size: inherit;
        }                                               
        .${TEXT_ROOT_CLASSNAME}:is(s) {
            font-size: inherit;
        }         
        .${TEXT_ROOT_CLASSNAME}:is(h1) {
            font-size: 2.25rem;
        }
        .${TEXT_ROOT_CLASSNAME}:is(h2) {
            font-size: 2rem;
        }
        .${TEXT_ROOT_CLASSNAME}:is(h3) {
            font-size: 1.75rem;
        }
        .${TEXT_ROOT_CLASSNAME}:is(h4) {
            font-size: 1.5rem;
        }
        .${TEXT_ROOT_CLASSNAME}:is(h5) {
            font-size: 1.25rem;
        }
        .${TEXT_ROOT_CLASSNAME}:is(h6) {
            font-size: 1rem;
        }                                                                     
    `;
};
