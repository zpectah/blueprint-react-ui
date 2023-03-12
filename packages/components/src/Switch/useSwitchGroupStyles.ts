import { classNamesFromList, useUniqueStyles, useThemeContext, WithStyleProps, WithRequiredStyleProps, WithValidationState, getValidationClassName } from '../../../core/src';
import {
    SWITCH_GROUP_SCOPE_NAME,
    SWITCH_GROUP_CLASSNAME,
    SWITCH_GROUP_LEGEND_CLASSNAME,
    SWITCH_GROUP_BODY_CLASSNAME,
} from './const';
import { getSwitchGroupStyles } from './styles';

export type UseSwitchGroupStylesProps = WithValidationState & WithStyleProps;
export type UseSwitchGroupStylesReturn = {
    root: WithRequiredStyleProps;
    legend: {
        className: WithRequiredStyleProps['className'];
    };
    body: {
        className: WithRequiredStyleProps['className'];
    };
};

export const useSwitchGroupStyles = ({ style, className, validationState }: UseSwitchGroupStylesProps): UseSwitchGroupStylesReturn => {
    const { theme } = useThemeContext();

    const updatedClassName = classNamesFromList([
        SWITCH_GROUP_CLASSNAME,
        getValidationClassName(validationState),
        className,
    ]);

    useUniqueStyles({
        id: SWITCH_GROUP_SCOPE_NAME,
        styles: getSwitchGroupStyles(theme),
    });

    return {
        root: {
            style: { ...style },
            className: updatedClassName,
        },
        legend: {
            className: SWITCH_GROUP_LEGEND_CLASSNAME,
        },
        body: {
            className: SWITCH_GROUP_BODY_CLASSNAME,
        },
    };
};
