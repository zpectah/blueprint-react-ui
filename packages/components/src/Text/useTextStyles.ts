import { useClassName, useUniqueStyles, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { useThemeContext } from '../../../foundation/src';

export type UseTextStylesProps = WithStyleProps;
export type UseTextStylesReturn = WithRequiredStyleProps;

export const useTextStyles = ({ style, className }: UseTextStylesProps): UseTextStylesReturn => {
    const scope = 'Text';

    const { className: updatedClassName } = useClassName({
        classes: [
            scope,
            className,
        ],
    });
    const { theme } = useThemeContext();

    useUniqueStyles({
        id: scope,
        styles: `
            .${scope} {
                font-family: ${theme?.typography?.fontFamily?.base};
                line-height: ${theme?.typography?.lineHeight?.base};
                color: inherit;
            }
            .${scope}:is(p) {
                font-size: inherit;
            }
            .${scope}:is(span) {
                font-size: inherit;
            }
            .${scope}:is(small) {
                font-size: .75rem;
            }
            .${scope}:is(em) {
                font-size: inherit;
            }
            .${scope}:is(a) {
                font-size: inherit;
            }                                               
            .${scope}:is(s) {
                font-size: inherit;
            }         
            .${scope}:is(h1) {
                font-size: 2.25rem;
            }
            .${scope}:is(h2) {
                font-size: 2rem;
            }
            .${scope}:is(h3) {
                font-size: 1.75rem;
            }
            .${scope}:is(h4) {
                font-size: 1.5rem;
            }
            .${scope}:is(h5) {
                font-size: 1.25rem;
            }
            .${scope}:is(h6) {
                font-size: 1rem;
            }                                                                     
        `,
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
