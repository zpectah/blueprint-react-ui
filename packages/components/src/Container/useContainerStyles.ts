import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps } from '../../../core/src';
import { ContainerBaseProps } from './types';
import { CONTAINER_SCOPE_NAME, CONTAINER_DEFAULT_MAX_WIDTH } from './const';
import getContainerStyles from './styles';

export type UseContainerStylesProps = Pick<ContainerBaseProps, 'maxWidth'> & WithStyleProps;
export type UseContainerStylesReturn = WithRequiredStyleProps;

export const useContainerStyles = (props: UseContainerStylesProps): UseContainerStylesReturn => {
    const { style, className, maxWidth = CONTAINER_DEFAULT_MAX_WIDTH } = props;

    const CONTAINER_MAX_WIDTH_CLASSNAME = `${CONTAINER_SCOPE_NAME}--${maxWidth}`;

    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        CONTAINER_SCOPE_NAME,
        CONTAINER_MAX_WIDTH_CLASSNAME,
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
