import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { CONTAINER_SCOPE_NAME } from './const';
import getContainerStyles from './styles';

export type UseContainerStylesProps = WithStyleProps;
export type UseContainerStylesReturn = WithRequiredStyleProps;

export const useContainerStyles = ({ style, className }: UseContainerStylesProps): UseContainerStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        CONTAINER_SCOPE_NAME,
        className,
    ]);

    useUniqueStyles({
        id: CONTAINER_SCOPE_NAME,
        styles: getContainerStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
