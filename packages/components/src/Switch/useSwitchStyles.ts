import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import { SWITCH_SCOPE_NAME, SWITCH_ROOT_CLASSNAME, SWITCH_LABEL_CLASSNAME } from './const';
import { getSwitchStyles } from './styles';

export type UseSwitchStylesProps = WithValidationState & WithStyleProps;
export type UseSwitchStylesReturn = {
    root: WithRequiredStyleProps;
    label: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useSwitchStyles = ({ style, className, validationState }: UseSwitchStylesProps): UseSwitchStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        SWITCH_ROOT_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: SWITCH_SCOPE_NAME,
        styles: getSwitchStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        label: {
            className: SWITCH_LABEL_CLASSNAME,
        },
    };
};
