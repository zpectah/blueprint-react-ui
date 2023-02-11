import { CSSProperties } from 'react';
import { useClassName, useUniqueStyles } from '../../../core/src';
import { useThemeContext } from '../../../foundation/src';

export interface UseButtonStylesProps {
    style?: CSSProperties;
    className?: string;
}

export interface UseButtonStylesReturn {
    style: CSSProperties;
    className: string;
}

export const useButtonStyles = ({ style, className }: UseButtonStylesProps): UseButtonStylesReturn => {
    const updatedStyles = { ...style };

    const { theme } = useThemeContext();
    const { className: updatedClassName } = useClassName({
        classes: [
            'Button',
            className,
        ],
        // className: '',
    });

    useUniqueStyles({
        id: 'Button',
        styles: `
            .Button {
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
                line-height: 1.345;
                cursor: pointer;            
            }
            .Button:is(button) {}
            .Button:is(a) {
                text-decoration: none;
            }            
        `,
    });

    return {
        style: updatedStyles,
        className: updatedClassName,
    };
};
