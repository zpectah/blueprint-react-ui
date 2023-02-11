import { useClassName, useUniqueStyles, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { useThemeContext } from '../../../foundation/src';

export type UseButtonStylesProps = WithStyleProps;
export type UseButtonStylesReturn = WithRequiredStyleProps;

export const useButtonStyles = ({ style, className }: UseButtonStylesProps): UseButtonStylesReturn => {
    const scope = 'Button';

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
                width: auto;
                height: auto;
                margin: 0;
                padding: calc(${theme?.spacing?.base} / 3) calc(${theme?.spacing?.base} / 2);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: .5rem;
                background: none;
                color: ${theme?.colors?.base};
                border: 1px solid ${theme?.colors?.base};
                border-radius: .25rem;
                font-family: ${theme?.typography?.fontFamily?.base};
                font-size: 1rem;
                line-height: ${theme?.typography?.lineHeight?.base};
                cursor: pointer;            
            }
            .${scope}:is(button) {}
            .${scope}:is(a) {
                text-decoration: none;
            }            
        `,
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
