import { useClassName, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';

export type UseContainerStylesProps = WithStyleProps;
export type UseContainerStylesReturn = WithRequiredStyleProps;

export const useContainerStyles = ({ style, className }: UseContainerStylesProps): UseContainerStylesReturn => {
    const scope = 'Container';

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
