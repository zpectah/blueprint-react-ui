import { useClassName, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';

export type UseStackStylesProps = WithStyleProps;
export type UseStackStylesReturn = WithRequiredStyleProps;

export const useStackStyles = ({ style, className }: UseStackStylesProps): UseStackStylesReturn => {
    const scope = 'Stack';

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
