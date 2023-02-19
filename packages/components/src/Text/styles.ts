import { ThemeProps } from '../../../core/src';
import { TEXT_SCOPE_NAME } from './const';

const getTextStyles = (theme: ThemeProps) => {
    return `
        .${TEXT_SCOPE_NAME} {
            font-family: ${theme.typography.fontFamily.base};
            line-height: ${theme.typography.lineHeight.base};
            color: ${theme.palette.text.primary};
        }
        .${TEXT_SCOPE_NAME}:is(p) {
            font-size: inherit;
        }
        .${TEXT_SCOPE_NAME}:is(span) {
            font-size: inherit;
        }
        .${TEXT_SCOPE_NAME}:is(small) {
            font-size: .75rem;
        }
        .${TEXT_SCOPE_NAME}:is(em) {
            font-size: inherit;
        }
        .${TEXT_SCOPE_NAME}:is(a) {
            font-size: inherit;
        }                                               
        .${TEXT_SCOPE_NAME}:is(s) {
            font-size: inherit;
        }         
        .${TEXT_SCOPE_NAME}:is(h1) {
            font-size: 2.25rem;
        }
        .${TEXT_SCOPE_NAME}:is(h2) {
            font-size: 2rem;
        }
        .${TEXT_SCOPE_NAME}:is(h3) {
            font-size: 1.75rem;
        }
        .${TEXT_SCOPE_NAME}:is(h4) {
            font-size: 1.5rem;
        }
        .${TEXT_SCOPE_NAME}:is(h5) {
            font-size: 1.25rem;
        }
        .${TEXT_SCOPE_NAME}:is(h6) {
            font-size: 1rem;
        }                                                                     
    `;
};

export default getTextStyles;
