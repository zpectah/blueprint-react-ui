import { useClassName, useUniqueStyles, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { useThemeContext } from '../../../foundation/src';

export type UseStackStylesProps = WithStyleProps;
export type UseStackStylesReturn = WithRequiredStyleProps;

export const useStackStyles = ({ style, className }: UseStackStylesProps): UseStackStylesReturn => {
    const scope = 'Stack';

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
