import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { SELECT_BASE_SCOPE_NAME, SELECT_BASE_CLASSNAME } from './const';
import { getSelectBaseStyles } from './styles';

export type UseSelectBaseStylesProps = WithValidationState & WithStyleProps;
export type UseSelectBaseStylesReturn = WithRequiredStyleProps;

export const useSelectBaseStyles = ({ style, className, validationState }: UseSelectBaseStylesProps): UseSelectBaseStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        SELECT_BASE_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: SELECT_BASE_SCOPE_NAME,
        styles: getSelectBaseStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
