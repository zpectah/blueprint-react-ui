import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { SWITCH_BASE_SCOPE_NAME, SWITCH_BASE_CLASSNAME } from './const';
import { getSwitchBaseStyles } from './styles';

export type UseSwitchBaseStylesProps = WithValidationState & WithStyleProps;
export type UseSwitchBaseStylesReturn = WithRequiredStyleProps;

export const useSwitchBaseStyles = ({ style, className, validationState }: UseSwitchBaseStylesProps): UseSwitchBaseStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        SWITCH_BASE_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: SWITCH_BASE_SCOPE_NAME,
        styles: getSwitchBaseStyles(theme),
    });

    return {
        style: { ...style },
        className: updatedClassName,
    };
};
