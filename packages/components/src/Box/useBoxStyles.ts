import { useClassName, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';

export type UseBlockStylesProps = WithStyleProps;
export type UseBlockStylesReturn = WithRequiredStyleProps;

export const useBoxStyles = ({ style, className }: UseBlockStylesProps): UseBlockStylesReturn => {
    const scope = 'Box';

    const { theme } = useThemeContext();
    const { className: updatedClassName } = useClassName({
        classes: [
            scope,
            className,
        ],
    });

    useUniqueStyles({
        id: scope,
        styles: `
            .${scope} {
                font-family: ${theme?.typography?.fontFamily?.base};
                font-size: 1rem;
                line-height: ${theme?.typography?.lineHeight?.base};
                color: inherit;
            }
        `,
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
